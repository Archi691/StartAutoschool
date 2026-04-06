require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── CONFIG ──
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8359061101:AAEbeo0qyqKCta2JMnbyLu91BO_GMyp5Pa4';
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID   || '-5226526832';

// ── HELPERS ──
function escape(text) {
  return String(text || '').replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}

async function sendTelegram(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'MarkdownV2'
    })
  });
  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram error: ${JSON.stringify(data)}`);
  return data;
}

// ── VALIDATION ──
function validatePayload(body) {
  const errors = [];

  const { name, phone, district, lessonType } = body;

  // name: min 2 words, letters only (Latin + Cyrillic), max 60 chars
  if (!name || typeof name !== 'string') {
    errors.push('name: обязательное поле');
  } else {
    const trimmed = name.trim();
    const parts = trimmed.split(/\s+/).filter(Boolean);
    if (parts.length < 2) errors.push('name: введите имя и фамилию');
    if (trimmed.length > 60) errors.push('name: слишком длинное значение');
    if (!/^[а-яёА-ЯЁa-zA-Z\s\-]+$/.test(trimmed)) errors.push('name: недопустимые символы');
  }

  // phone: must be 11 digits starting with 7 (Kazakhstan/Russia)
  if (!phone || typeof phone !== 'string') {
    errors.push('phone: обязательное поле');
  } else {
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 11 || !digits.startsWith('7')) {
      errors.push('phone: некорректный номер телефона');
    }
  }

  // district: must be non-empty string from known list
  const DISTRICTS = [
    'Алмалинский район', 'Алатауский район', 'Ауэзовский район',
    'Бостандыкский район', 'Жетысуский район', 'Медеуский район',
    'Наурызбайский район', 'Турксибский район'
  ];
  if (!district || !DISTRICTS.includes(district)) {
    errors.push('district: выберите корректный район');
  }

  // lessonType: must be one of the known values
  const LESSONS = [
    'Урок по городу — 9 000 ₸',
    'Урок на автодроме — 8 000 ₸',
    'Комбинированный урок — 9 000 ₸'
  ];
  if (!lessonType || !LESSONS.includes(lessonType)) {
    errors.push('lessonType: выберите корректный тип урока');
  }

  return errors;
}

// ── SUBMIT ENDPOINT ──
app.post('/api/submit', async (req, res) => {
  try {
    const errors = validatePayload(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ ok: false, errors });
    }

    const { name, phone, district, lessonType } = req.body;

    // Format phone for display
    const digits = phone.replace(/\D/g, '');
    const prettyPhone = `+${digits[0]} (${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7,9)}-${digits.slice(9,11)}`;

    // Build Telegram message
    const now = new Date().toLocaleString('ru-RU', {
      timeZone: 'Asia/Almaty',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const message = [
      `🚗 *Новая заявка — Автошкола СТАРТ*`,
      ``,
      `👤 *Имя:* ${escape(name)}`,
      `📞 *Телефон:* ${escape(prettyPhone)}`,
      `📍 *Район:* ${escape(district)}`,
      `🎓 *Тип урока:* ${escape(lessonType)}`,
      ``,
      `🕐 *Время заявки:* ${escape(now)} \\(Алматы\\)`,
    ].join('\n');

    await sendTelegram(message);

    console.log(`[${now}] Новая заявка: ${name}, ${prettyPhone}, ${district}, ${lessonType}`);

    return res.json({ ok: true, message: 'Заявка успешно отправлена' });

  } catch (err) {
    console.error('Ошибка при отправке:', err.message);
    return res.status(500).json({ ok: false, error: 'Внутренняя ошибка сервера' });
  }
});

// ── SERVE FRONTEND ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── START ──
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
  if (BOT_TOKEN === 'ВАШ_ТОКЕН_СЮДА') {
    console.warn('⚠️  TELEGRAM_BOT_TOKEN не задан! Заявки не будут отправляться в Telegram.');
  }
});
