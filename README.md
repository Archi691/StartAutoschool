# 🚗 Автошкола СТАРТ — Лендинг

Современный лендинг автошколы СТАРТ (Алматы) с формой записи и интеграцией с Telegram.

## ✨ Возможности

- 🌓 Светлая и тёмная тема (с сохранением выбора)
- 🌐 Мультиязычность: русский и казахский
- 📱 Полностью адаптивный дизайн
- 📨 Отправка заявок в Telegram
- 🔍 SEO-оптимизация (meta, Open Graph, JSON-LD)

## Структура проекта

```
├── public/
│   ├── index.html        ← Фронтенд (лендинг)
│   ├── style.css         ← Стили (светлая/тёмная тема)
│   ├── theme.js          ← Переключатель тем
│   ├── i18n.js           ← Мультиязычность (RU/KZ)
│   └── assets/           ← Изображения, иконки
├── server.js             ← Node.js бэкенд (Express)
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
├── .env.example          ← Шаблон переменных окружения
└── .env                  ← Ваши настройки (не коммитить!)
```

## Быстрый старт

### 1. Установить зависимости
```bash
npm install
```

### 2. Настроить .env файл
```bash
cp .env.example .env
```
Откройте `.env` и вставьте Telegram Bot Token и Chat ID.

### 3. Запустить сервер
```bash
# Продакшн
npm start

# Разработка (с авторестартом)
npm run dev
```

Сайт будет доступен по адресу: **http://localhost:3000**

## 🐳 Docker

### Собрать и запустить
```bash
docker build -t start-avtoshkola .
docker run -d -p 3000:3000 --env-file .env --name start-web start-avtoshkola
```

## 🚀 Деплой

### GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### Сервер (с Docker)
```bash
# На сервере:
git clone https://github.com/<username>/<repo>.git
cd <repo>
cp .env.example .env   # настроить токены
docker build -t start-avtoshkola .
docker run -d -p 3000:3000 --env-file .env --restart unless-stopped start-avtoshkola
```

## Настройка Telegram бота

1. Откройте Telegram → найдите **@BotFather**
2. Напишите `/newbot` → задайте название и username
3. Скопируйте **токен** (формат: `123456789:AAF...`)
4. Напишите вашему боту `/start`
5. Откройте: `https://api.telegram.org/bot<ТОКЕН>/getUpdates`
6. Найдите `"chat": {"id": 123456789}` — это ваш **chat_id**
