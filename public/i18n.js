/* ── i18n — Мультиязычность RU / KZ ── */
const translations = {
  ru: {
    // Nav
    "nav.about": "О нас",
    "nav.pricing": "Тарифы",
    "nav.team": "Инструкторы",
    "nav.cta": "Записаться",

    // Hero
    "hero.tag": "Автошкола в Алматы",
    "hero.title": 'Уроки<br>вождения<br>с <span>опытными</span><br>инструкторами',
    "hero.desc": "Индивидуальные занятия по городу и автодрому. Гибкий график, современные автомобили, реальные результаты.",
    "hero.stat1.num": "500<span>+</span>",
    "hero.stat1.label": "Выпускников",
    "hero.stat2.num": "8<span>+</span>",
    "hero.stat2.label": "Лет опыта",
    "hero.stat3.num": "96<span>%</span>",
    "hero.stat3.label": "Сдают с 1 раза",
    "hero.scroll": "↓ Узнать больше",

    // Form
    "form.title": "Записаться на урок",
    "form.subtitle": "Оставьте заявку — мы свяжемся в течение 15 минут",
    "form.name.label": "Имя и Фамилия",
    "form.name.placeholder": "Айдана Сейткали",
    "form.name.error": "Введите имя и фамилию",
    "form.phone.label": "Номер телефона",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.phone.error": "Введите корректный номер (+7 или 8)",
    "form.district.label": "Район Алматы",
    "form.district.default": "Выберите район",
    "form.lesson.label": "Тип урока",
    "form.lesson.default": "Выберите тип урока",
    "form.submit": "Записаться на пробный урок →",
    "form.sending": "Отправляем...",
    "form.success.title": "Заявка принята!",
    "form.success.text": "Наш инструктор свяжется с вами в течение 15 минут.",
    "form.error.alert": "Ошибка отправки. Пожалуйста, позвоните нам напрямую.",

    // Districts
    "district.almalinsky": "Алмалинский район",
    "district.alatausky": "Алатауский район",
    "district.auezovsky": "Ауэзовский район",
    "district.bostandyksky": "Бостандыкский район",
    "district.zhetysusky": "Жетысуский район",
    "district.medeusky": "Медеуский район",
    "district.nauryzbaisky": "Наурызбайский район",
    "district.turksibsky": "Турксибский район",

    // Lessons
    "lesson.city": "Урок по городу — 9 000 ₸",
    "lesson.autodrome": "Урок на автодроме — 8 000 ₸",
    "lesson.autodrome3": "3 урока по автодрому — 18 000 ₸",
    "lesson.autodrome5": "5 уроков по автодрому — 30 000 ₸",

    // Why Us
    "why.tag": "Наши преимущества",
    "why.title": "Почему выбирают<br>именно нас",
    "why.desc": "Мы предлагаем уроки вождения по городу и автодрому. Наши услуги помогут вам улучшить навыки вождения.",
    "why.card1.title": "Опытные инструкторы",
    "why.card1.text": "Наши инструкторы имеют большой опыт и готовы поделиться знаниями. Индивидуальный подход к каждому.",
    "why.card2.title": "Современные автомобили",
    "why.card2.text": "Для занятий используем хорошие автомобили с двойным управлением, что обеспечивает комфорт и безопасность.",
    "why.card3.title": "Доступные цены",
    "why.card3.text": "Мы предлагаем уроки вождения по доступным ценам, чтобы каждый мог научиться уверенно водить автомобиль.",

    // Pricing
    "pricing.tag": "Тарифы",
    "pricing.title": "Наши тарифы",
    "pricing.desc": "Выучите правила дорожного движения и научитесь уверенно управлять автомобилем.",
    "pricing.badge": "Популярный",
    "pricing.card1.type": "Базовый",
    "pricing.card1.title": "Урок по городу",
    "pricing.card1.desc": "Обучение вождению в городских условиях с опытным инструктором",
    "pricing.card1.price": "9 000 ₸",
    "pricing.card1.per": "за одно занятие",
    "pricing.card1.f1": "Обучение вождению по городу",
    "pricing.card1.f2": "Сопровождение опытного инструктора",
    "pricing.card1.f3": "Использование учебного автомобиля",
    "pricing.card2.type": "Рекомендуем",
    "pricing.card2.title": "Урок на автодроме",
    "pricing.card2.desc": "Отработка основных навыков вождения на закрытой площадке",
    "pricing.card2.price": "8 000 ₸",
    "pricing.card2.per": "за одно занятие",
    "pricing.card2.f1": "Обучение на автодроме",
    "pricing.card2.f2": "Сопровождение опытного инструктора",
    "pricing.card2.f3": "Использование учебного автомобиля",
    "pricing.card3.type": "Расширенный",
    "pricing.card3.title": "Пакет уроков на автодроме",
    "pricing.card3.desc": "3 урока вождения на закрытой площадке",
    "pricing.card3.price": "18 000 ₸",
    "pricing.card3.per": "за три занятия",
    "pricing.card3.f1": "Уроки на автодроме",
    "pricing.card3.f2": "Сопровождение опытного инструктора",
    "pricing.card3.f3": "Использование учебного автомобиля",
    "pricing.card3.f4": "Экономия 6 000 ₸",
    "pricing.card4.type": "Максимальный",
    "pricing.card4.title": "Пакет уроков на автодроме",
    "pricing.card4.desc": "5 уроков вождения на закрытой площадке",
    "pricing.card4.price": "30 000 ₸",
    "pricing.card4.per": "за пять занятий",
    "pricing.card4.f1": "Уроки на автодроме",
    "pricing.card4.f2": "Сопровождение опытного инструктора",
    "pricing.card4.f3": "Использование учебного автомобиля",
    "pricing.card4.f4": "Экономия 10 000 ₸",
    "pricing.book": "Записаться",

    // Team
    "team.tag": "Команда",
    "team.title": "Наша команда<br>автоинструкторов",
    "team.desc": "Мы гордимся своей командой профессионалов, готовых помочь вам освоить навыки вождения.",
    "team.role": "Автоинструктор",
    "team.car.label": "Автомобиль:",
    "team.district.label": "Район:",
    "team.book": "Записаться",

    // Footer
    "footer.copy": "© 2025 Автошкола СТАРТ, Алматы. Все права защищены.",
  },

  kz: {
    // Nav
    "nav.about": "Біз туралы",
    "nav.pricing": "Тарифтер",
    "nav.team": "Нұсқаушылар",
    "nav.cta": "Жазылу",

    // Hero
    "hero.tag": "Алматыдағы автомектеп",
    "hero.title": 'Тәжірибелі<br>нұсқаушылармен<br><span>жүргізу</span><br>сабақтары',
    "hero.desc": "Қала мен автодром бойынша жеке сабақтар. Икемді кесте, заманауи автомобильдер, нақты нәтижелер.",
    "hero.stat1.num": "500<span>+</span>",
    "hero.stat1.label": "Түлектер",
    "hero.stat2.num": "8<span>+</span>",
    "hero.stat2.label": "Жыл тәжірибе",
    "hero.stat3.num": "96<span>%</span>",
    "hero.stat3.label": "Бірінші рет тапсырады",
    "hero.scroll": "↓ Толығырақ білу",

    // Form
    "form.title": "Сабаққа жазылу",
    "form.subtitle": "Өтінім қалдырыңыз — 15 минут ішінде хабарласамыз",
    "form.name.label": "Аты-жөні",
    "form.name.placeholder": "Айдана Сейтқали",
    "form.name.error": "Атыңыз бен тегіңізді енгізіңіз",
    "form.phone.label": "Телефон нөмірі",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.phone.error": "Дұрыс нөмірді енгізіңіз (+7 немесе 8)",
    "form.district.label": "Алматы ауданы",
    "form.district.default": "Ауданды таңдаңыз",
    "form.lesson.label": "Сабақ түрі",
    "form.lesson.default": "Сабақ түрін таңдаңыз",
    "form.submit": "Сынақ сабағына жазылу →",
    "form.sending": "Жіберілуде...",
    "form.success.title": "Өтінім қабылданды!",
    "form.success.text": "Біздің нұсқаушы сізге 15 минут ішінде хабарласады.",
    "form.error.alert": "Жіберу қатесі. Бізге тікелей қоңырау шалыңыз.",

    // Districts
    "district.almalinsky": "Алмалы ауданы",
    "district.alatausky": "Алатау ауданы",
    "district.auezovsky": "Әуезов ауданы",
    "district.bostandyksky": "Бостандық ауданы",
    "district.zhetysusky": "Жетісу ауданы",
    "district.medeusky": "Медеу ауданы",
    "district.nauryzbaisky": "Наурызбай ауданы",
    "district.turksibsky": "Түрксіб ауданы",

    // Lessons
    "lesson.city": "Қала бойынша сабақ — 9 000 ₸",
    "lesson.autodrome": "Автодромдағы сабақ — 8 000 ₸",
    "lesson.autodrome3": "Автодромда 3 сабақ — 18 000 ₸",
    "lesson.autodrome5": "Автодромда 5 сабақ — 30 000 ₸",

    // Why Us
    "why.tag": "Біздің артықшылықтар",
    "why.title": "Неліктен бізді<br>таңдайды",
    "why.desc": "Біз қала мен автодром бойынша жүргізу сабақтарын ұсынамыз. Біздің қызметтер сіздің жүргізу дағдыларыңызды жақсартуға көмектеседі.",
    "why.card1.title": "Тәжірибелі нұсқаушылар",
    "why.card1.text": "Біздің нұсқаушылардың үлкен тәжірибесі бар және білімдерін бөлісуге дайын. Әрбір адамға жеке көзқарас.",
    "why.card2.title": "Заманауи автомобильдер",
    "why.card2.text": "Сабақтарда қос басқарылатын жақсы автомобильдер қолданылады, бұл қолайлылық пен қауіпсіздікті қамтамасыз етеді.",
    "why.card3.title": "Қолжетімді бағалар",
    "why.card3.text": "Біз қолжетімді бағалармен жүргізу сабақтарын ұсынамыз, сондықтан әр адам сенімді түрде автокөлік жүргізуді үйрене алады.",

    // Pricing
    "pricing.tag": "Тарифтер",
    "pricing.title": "Біздің тарифтер",
    "pricing.desc": "Жол жүру ережелерін үйреніп, автокөлікті сенімді басқаруды үйреніңіз.",
    "pricing.badge": "Танымал",
    "pricing.card1.type": "Базалық",
    "pricing.card1.title": "Қала бойынша сабақ",
    "pricing.card1.desc": "Тәжірибелі нұсқаушымен қала жағдайында жүргізуді үйрену",
    "pricing.card1.price": "9 000 ₸",
    "pricing.card1.per": "бір сабақ үшін",
    "pricing.card1.f1": "Қала бойынша жүргізуді үйрету",
    "pricing.card1.f2": "Тәжірибелі нұсқаушы сүйемелдеуі",
    "pricing.card1.f3": "Оқу автомобилін пайдалану",
    "pricing.card2.type": "Ұсынамыз",
    "pricing.card2.title": "Автодромдағы сабақ",
    "pricing.card2.desc": "Жабық алаңда жүргізудің негізгі дағдыларын жаттықтыру",
    "pricing.card2.price": "8 000 ₸",
    "pricing.card2.per": "бір сабақ үшін",
    "pricing.card2.f1": "Автодромда үйрету",
    "pricing.card2.f2": "Тәжірибелі нұсқаушы сүйемелдеуі",
    "pricing.card2.f3": "Оқу автомобилін пайдалану",
    "pricing.card3.type": "Кеңейтілген",
    "pricing.card3.title": "Автодромдағы сабақтар пакеті",
    "pricing.card3.desc": "Жабық алаңда 3 жүргізу сабағы",
    "pricing.card3.price": "18 000 ₸",
    "pricing.card3.per": "үш сабақ үшін",
    "pricing.card3.f1": "Автодромдағы сабақтар",
    "pricing.card3.f2": "Тәжірибелі нұсқаушы сүйемелдеуі",
    "pricing.card3.f3": "Оқу автомобилін пайдалану",
    "pricing.card3.f4": "6 000 ₸ үнемдеу",
    "pricing.card4.type": "Максималды",
    "pricing.card4.title": "Автодромдағы сабақтар пакеті",
    "pricing.card4.desc": "Жабық алаңда 5 жүргізу сабағы",
    "pricing.card4.price": "30 000 ₸",
    "pricing.card4.per": "бес сабақ үшін",
    "pricing.card4.f1": "Автодромдағы сабақтар",
    "pricing.card4.f2": "Тәжірибелі нұсқаушы сүйемелдеуі",
    "pricing.card4.f3": "Оқу автомобилін пайдалану",
    "pricing.card4.f4": "10 000 ₸ үнемдеу",
    "pricing.book": "Жазылу",

    // Team
    "team.tag": "Команда",
    "team.title": "Біздің автонұсқаушылар<br>командасы",
    "team.desc": "Біз сіздерге жүргізу дағдыларын меңгеруге көмектесуге дайын кәсіпқойлар командамызбен мақтанамыз.",
    "team.role": "Автонұсқаушы",
    "team.car.label": "Автомобиль:",
    "team.district.label": "Аудан:",
    "team.book": "Жазылу",

    // Footer
    "footer.copy": "© 2025 СТАРТ автомектебі, Алматы. Барлық құқықтар қорғалған.",
  },
};

let currentLang = localStorage.getItem("start-lang") || "ru";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("start-lang", lang);
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = translations[lang]?.[key];
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = translations[lang]?.[key];
    if (val !== undefined) {
      el.placeholder = val;
    }
  });

  // Update select options
  document.querySelectorAll("[data-i18n-option]").forEach((el) => {
    const key = el.getAttribute("data-i18n-option");
    const val = translations[lang]?.[key];
    if (val !== undefined) {
      el.textContent = val;
    }
  });

  // Update active state of language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update page title
  if (lang === "kz") {
    document.title = "СТАРТ — Алматыдағы автомектеп";
  } else {
    document.title = "СТАРТ — Автошкола в Алматы";
  }

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    if (lang === "kz") {
      metaDesc.content = "СТАРТ автомектебі — Алматыда жүргізу сабақтары. Тәжірибелі нұсқаушылар, заманауи автомобильдер, қолжетімді бағалар.";
    } else {
      metaDesc.content = "Автошкола СТАРТ в Алматы — уроки вождения по городу и автодрому. Опытные инструкторы, современные автомобили, доступные цены. Запишитесь на пробный урок!";
    }
  }
}

function initI18n() {
  // Setup language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Apply saved language
  setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", initI18n);
