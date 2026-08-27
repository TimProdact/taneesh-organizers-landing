/* Taneesh organizers landing — RU / UZ / EN */
window.TaneeshI18n = (function () {
  const STORAGE_KEY = 'taneesh-landing-locale';
  const LOCALES = [
    { id: 'ru', label: 'Русский', short: 'RU' },
    { id: 'uz', label: "O'zbek", short: 'UZ' },
    { id: 'en', label: 'English', short: 'EN' },
  ];

  const dict = {
    ru: {
      docTitle: 'Taneesh для организаторов — билеты за 5 минут',
      navAria: 'Навигация',
      navWhy: 'Почему мы',
      navIncluded: 'Что даём',
      navFees: 'Сборы',
      navOrgs: 'Организаторы',
      navStart: 'Запустить',
      changeLanguage: 'Сменить язык',
      languageMenu: 'Язык интерфейса',
      heroEyebrow: 'Тикетинг для организаторов',
      heroTitle: 'Продавайте билеты.<br />Получайте <span class="accent">100%</span> цены',
      heroLead: 'Витрина за 5 минут. Сбор платит гость — вам 100% цены билета.',
      heroCta: 'Запустить продажи',
      heroNote: 'Без абонентки · подключение за 5 минут',
      winAdmin: 'Админка',
      winAdminTitle: 'Weekend Stand-up',
      winSold: 'продано',
      winRevenue: 'оборот',
      winConv: 'конверсия',
      winTickets: 'Тарифы',
      winScan: 'Сканер',
      winScanHint: '68 / 70 прошли',
      winStore: 'Витрина',
      winAgent: 'Taneesh · Витрина',
      winAsk: 'Спросить агента витрины',
      winPill1: 'Оплата прошла · Humo',
      winPill2: 'Билет выпущен · QR готов',
      winPill3: 'Пуш гостю · «Ждём вас»',
      winPill4: 'Гость в пути',
      winPill5: 'Скан на входе ✓',
      m100: 'цены билета вам',
      m5: 'до первой витрины',
      m0: 'абонентки орга',
      whyEyebrow: 'Экономика организатора',
      whyTitle: 'Не отдавайте 15% с билета',
      whyTicket: 'Цена билета на концерт',
      whyBad: 'Обычная касса · 15%',
      whyGood: 'Taneesh · вам 100%',
      whySaveLabel: 'экономия с 1 билета vs 15% касса',
      whySavePack: 'Экономия на 100 билетах',
      currency: 'сум',
      perTicket: 'с билета',
      ofPrice: 'с цены',
      convEyebrow: 'Прозрачность',
      convTitle: 'Конверсия в реальном времени',
      livePill: 'Live · платформа',
      liveDesc: 'Витрина → оплата — без приукрашивания.',
      liveViews: 'Просмотры сейчас',
      livePays: 'Оплаты / час',
      liveCheckout: 'До чекаута',
      liveDrop: 'Бросили корзину',
      audTitle: 'Для кого',
      audSmallAlt: 'Небольшой ивент в своём кругу',
      audSmallTag: 'Свой круг',
      audSmallH: 'Интересные ивенты без бизнеса',
      audSmallP: 'До сотни гостей без ИП и кассы — объявили ивент и продаёте вход.',
      audSmall1: 'Старт за минуты',
      audSmall2: 'Оплата с телефона',
      audSmall3: 'Группа вокруг ивента',
      audLargeAlt: 'Крупный концерт и площадка',
      audLargeTag: 'Масштаб',
      audLargeH: 'Агентства и площадки',
      audLargeP: 'Серии ивентов и объём. FixedFee растёт вместе с вами — кастомные настройки в Super Admin.',
      audLarge1: 'Свой FixedFee',
      audLarge2: 'Серии и объём',
      audLarge3: 'Один кабинет на всё',
      feesEyebrow: 'Сборы',
      feesTitle: 'Сбор платит гость',
      feesYou: 'вам · 100% цены билета',
      feesGuest: 'гость платит',
      feesTicket: 'Цена билета',
      feesFix: 'FixedFee на гостя',
      feesHint: 'Крупным — FixedFee от 3–5 тыс. в админке.',
      feesFeeRow: 'Сбор с гостя',
      feesAcq: 'эквайринг 1.5%',
      flowEyebrow: 'Запуск',
      flowTitle: 'Путь за 5 минут',
      flowLead: 'От кабинета до первой оплаты — без кассы, без абонентки и без сложной настройки.',
      flowCta: 'Запустить продажи',
      flow1t: 'Кабинет',
      flow1d: 'Создаёте кабинет организатора',
      flow2t: 'Ивент',
      flow2d: 'Создаёте ивент и цены билетов',
      flow3t: 'Витрина',
      flow3d: 'Размещаете ссылку в соцсетях или там, где есть трафик',
      flow4t: 'Оплата',
      flow4d: 'Приём оплаты — с договором онлайн или без договора на входе',
      flow5t: 'Группа',
      flow5d: 'Создаётся группа по ивенту',
      soon: 'скоро',
      offerEyebrow: 'Что даём',
      offerTitle: 'Функции для продаж',
      offerDl: 'Скачать коммерческое предложение',
      offerHint: 'Листайте вправо',
      offerAria: 'Функции платформы',
      o1tag: 'Витрина',
      o1t: 'Личная витрина',
      o1p: 'Страница ивента и smart-link — одна ссылка в соцсети и рекламу.',
      o2tag: 'Оплата',
      o2t: 'Оплата в 2 клика',
      o2p: 'Гость платит в браузере — без установки приложения.',
      o3tag: 'CRM',
      o3t: 'CRM гостей',
      o3p: 'Список купивших, статусы и контакты — в одном кабинете.',
      o4tag: 'Возврат',
      o4t: 'Возврат в 1 клик',
      o4p: 'Отмена и возврат билета гостю прямо из кабинета.',
      o5tag: 'Приглашения',
      o5t: 'Приглашения',
      o5p: 'Шлёте инвайт гостю — он открывает витрину и покупает.',
      o6tag: 'Сканер',
      o6t: 'Сканер билетов',
      o6p: 'Вход по QR на двери — без очередей и бумажных списков.',
      o7tag: 'В пути',
      o7t: 'Я в пути!',
      o7p: 'Гость отмечает, что едет — вы видите, кто уже на подходе.',
      faqTitle: 'Частые вопросы',
      faqClose: 'Понятно',
      ctaEyebrow: 'Старт',
      ctaChip1: '100% цены',
      ctaChip2: '5 мин',
      ctaChip3: 'гость платит сбор',
      ctaTitle: 'Запустите продажи.<br /><span class="cta-accent">Цена билета — ваша</span>',
      ctaLead: 'Подключим кабинет, настроим чекаут и покажем, как выглядит сбор для гостя.',
      ctaStart: 'Запустить продажи',
      ctaKp: 'Скачать КП',
      ctaStat: 'цены билета вам',
      cta1: 'Витрина и smart-link',
      cta2: 'Оплата в браузере',
      cta3: 'Кабинет без абонентки',
      footTag: 'Тикетинг для организаторов',
      footFees: 'Сборы',
      footOrgs: 'Организаторы',
      footCta: 'Заявка',
      footCtaTitle: 'Скачать КП',
      footCtaSub: 'Коммерческое предложение для организаторов',
      footColProduct: 'Продукт',
      footColStart: 'Старт',
      footColContact: 'Контакты',
      footMade: 'Сделано для организаторов',
      aggCost: (n) => `−${n} сум с билета`,
      tanCost: (n) => `0 сум с цены ${n}`,
      money: (n) => `${n} сум`,
      faq: [
        {
          q: 'Можно ли продавать без ИП и «большой» кассы?',
          a: 'Да. Платформа подходит предпринимателям, ООО и самозанятым. Для малых ивентов и комьюнити достаточно кабинета: объявили событие, выставили цену и продаёте вход с телефона.',
        },
        {
          q: 'Кто платит 1.5% и FixedFee?',
          a: 'Сервисный сбор платит гость при оплате: 1.5% эквайринга + FixedFee. Для бизнеса подключение бесплатно — вам уходит 100% цены билета, которую вы выставили.',
        },
        {
          q: 'Что я получаю с цены билета?',
          a: 'Поставили 100 000 — получили 100 000. Без комиссии с организатора и без наценки сверху на вашу цену: клиент видит честную цену, вы — 100% билета.',
        },
        {
          q: 'Есть ли абонентка за кабинет?',
          a: 'Нет. Кабинет и CRM — 0 сум. Без подписки: продаёте — зарабатываете. Вся прибыль с билетов ваша.',
        },
        {
          q: 'Чем Taneesh отличается от обычных касс?',
          a: 'Обычные кассы берут 5–15% с билета, ждут трафик и продают по 1–2 билета. У Taneesh: 0% с вашей цены, горячий трафик платформы, групповые чеки и эквайринг в сборе с гостя — не из вашего кармана.',
        },
        {
          q: 'Откуда берётся трафик на ивент?',
          a: 'Taneesh привлекает людей, а не только продаёт билеты: аудитория уже ищет, куда пойти сегодня. Алгоритмы рекомендуют ивенты по интересам — это активный канал, а не пассивная витрина.',
        },
        {
          q: 'Как работают групповые чеки?',
          a: 'Социальный матчинг решает «с кем пойти»: гости собираются компаниями и чаще берут 3–5 билетов вместо одного. Средний чек растёт без вашей доп. рекламы.',
        },
        {
          q: 'Нужно ли гостю скачивать приложение?',
          a: 'Нет. Покупка в 2 клика в браузере — без регистрации в приложении и без установки. Humo / Uzcard на чекауте.',
        },
        {
          q: 'Что такое smart-link и витрина?',
          a: 'Одна персональная витрина с вашим брендом и событиями плюс одна smart-link для Instagram, Telegram и рекламы. Разместили ссылку — гости попадают сразу к покупке.',
        },
        {
          q: 'Как принимаются оплаты и когда приходят деньги?',
          a: 'Оплата через платёжную систему с безопасным удержанием средств. После ивента выплаты проходят автоматически. В кабинете — баланс и статистика в реальном времени.',
        },
        {
          q: 'Есть ли условия для крупных партнёров?',
          a: 'Да. Для агентств и площадок FixedFee настраивается в админке (часто от 3–5 тыс. сум) — экономика растёт вместе с объёмом. Мы — резиденты IT Park Uzbekistan.',
        },
        {
          q: 'Сколько нужно, чтобы запуститься?',
          a: 'Обычно достаточно минут: связались с нами, создали кабинет и витрину, опубликовали первый ивент. Контакты: taneesh.uz, @taneeshuz, +998 88 034 87 97.',
        },
      ],
    },
    uz: {
      docTitle: 'Taneesh tashkilotchilar uchun — 5 daqiqada chiptalar',
      navAria: 'Navigatsiya',
      navWhy: 'Nima uchun biz',
      navIncluded: 'Nima beramiz',
      navFees: 'Yig‘imlar',
      navOrgs: 'Tashkilotchilar',
      navStart: 'Boshlash',
      changeLanguage: 'Tilni almashtirish',
      languageMenu: 'Interfeys tili',
      heroEyebrow: 'Tashkilotchilar uchun tiketing',
      heroTitle: 'Chiptalarni soting.<br />Narxning <span class="accent">100%</span>ini oling',
      heroLead: '5 daqiqada vitrina. Yig‘imni mehmon to‘laydi — sizga chipta narxining 100%.',
      heroCta: 'Sotuvni boshlash',
      heroNote: 'Abonent to‘lovisiz · 5 daqiqada ulash',
      winAdmin: 'Adminka',
      winAdminTitle: 'Weekend Stand-up',
      winSold: 'sotilgan',
      winRevenue: 'aylanma',
      winConv: 'konversiya',
      winTickets: 'Tariflar',
      winScan: 'Skaner',
      winScanHint: '68 / 70 o‘tdi',
      winStore: 'Vitrina',
      winAgent: 'Taneesh · Vitrina',
      winAsk: 'Vitrina agentidan so‘rang',
      winPill1: 'To‘lov o‘tdi · Humo',
      winPill2: 'Chipta chiqdi · QR tayyor',
      winPill3: 'Mehmonga push · «Sizni kutamiz»',
      winPill4: 'Mehmon yo‘lda',
      winPill5: 'Kirishda skan ✓',
      m100: 'chipta narxi sizga',
      m5: 'birinchi vitrinagacha',
      m0: 'tashkilotchi abonent to‘lovi',
      whyEyebrow: 'Tashkilotchi iqtisodi',
      whyTitle: 'Chiptadan 15% bermang',
      whyTicket: 'Konsert chiptasi narxi',
      whyBad: 'Oddiy kassa · 15%',
      whyGood: 'Taneesh · sizga 100%',
      whySaveLabel: '1 chiptadan tejam · 15% kassaga nisbatan',
      whySavePack: '100 chiptadagi tejam',
      currency: 'so‘m',
      perTicket: 'chiptadan',
      ofPrice: 'narxidan',
      convEyebrow: 'Shaffoflik',
      convTitle: 'Real vaqtda konversiya',
      livePill: 'Live · platforma',
      liveDesc: 'Vitrina → to‘lov — bezatmasdan.',
      liveViews: 'Hozirgi ko‘rishlar',
      livePays: 'To‘lovlar / soat',
      liveCheckout: 'Chekautgacha',
      liveDrop: 'Savatni tashlashdi',
      audTitle: 'Kimlar uchun',
      audSmallAlt: 'O‘z doirasidagi kichik tadbir',
      audSmallTag: 'O‘z doira',
      audSmallH: 'Biznesiz qiziqarli tadbirlar',
      audSmallP: 'YaPI va kassasiz yuztagacha mehmon — tadbir e’lon qildingiz va kirishni sotasiz.',
      audSmall1: 'Daqiqalarda start',
      audSmall2: 'Telefondan to‘lov',
      audSmall3: 'Tadbir atrofida guruh',
      audLargeAlt: 'Yirik kontsert va maydon',
      audLargeTag: 'Masshtab',
      audLargeH: 'Agentliklar va maydonlar',
      audLargeP: 'Tadbirlar seriyasi va hajm. FixedFee siz bilan o‘sadi — Super Admin’da individual sozlamalar.',
      audLarge1: 'O‘z FixedFee',
      audLarge2: 'Seriya va hajm',
      audLarge3: 'Hammasi uchun bitta kabinet',
      feesEyebrow: 'Yig‘imlar',
      feesTitle: 'Yig‘imni mehmon to‘laydi',
      feesYou: 'sizga · chipta narxining 100%',
      feesGuest: 'mehmon to‘laydi',
      feesTicket: 'Chipta narxi',
      feesFix: 'Mehmonga FixedFee',
      feesHint: 'Yiriklarga — adminpanelda FixedFee 3–5 mingdan.',
      feesFeeRow: 'Mehmon yig‘imi',
      feesAcq: 'ekvayring 1.5%',
      flowEyebrow: 'Start',
      flowTitle: '5 daqiqalik yo‘l',
      flowLead: 'Kabinetdan birinchi to‘lovgacha — kassasiz, abonentsiz va murakkab sozlamalarsiz.',
      flowCta: 'Sotuvni boshlash',
      flow1t: 'Kabinet',
      flow1d: 'Tashkilotchi kabinetini yaratasiz',
      flow2t: 'Tadbir',
      flow2d: 'Tadbir va chipta narxlarini yaratasiz',
      flow3t: 'Vitrina',
      flow3d: 'Havolani ijtimoiy tarmoqlarga yoki trafik bor joyga joylashtirasiz',
      flow4t: 'To‘lov',
      flow4d: 'To‘lov qabul qilish — onlayn shartnoma bilan yoki kirishda shartnomasiz',
      flow5t: 'Guruh',
      flow5d: 'Tadbir bo‘yicha guruh yaratiladi',
      soon: 'tez orada',
      offerEyebrow: 'Nima beramiz',
      offerTitle: 'Sotuv funksiyalari',
      offerDl: 'Tijorat taklifini yuklab olish',
      offerHint: 'O‘ngga suring',
      offerAria: 'Platforma funksiyalari',
      o1tag: 'Vitrina',
      o1t: 'Shaxsiy vitrina',
      o1p: 'Tadbir sahifasi va smart-link — ijtimoiy tarmoq va reklamaga bitta havola.',
      o2tag: 'To‘lov',
      o2t: '2 bosishda to‘lov',
      o2p: 'Mehmon brauzerda to‘laydi — ilova o‘rnatmasdan.',
      o3tag: 'CRM',
      o3t: 'Mehmonlar CRM',
      o3p: 'Xaridorlar ro‘yxati, statuslar va kontaktlar — bitta kabinetda.',
      o4tag: 'Qaytarish',
      o4t: '1 bosishda qaytarish',
      o4p: 'Chiptani bekor qilish va qaytarish — kabinetdan.',
      o5tag: 'Taklifnomalar',
      o5t: 'Taklifnomalar',
      o5p: 'Mehmonga invit yuborasiz — u vitrinani ochib xarid qiladi.',
      o6tag: 'Skaner',
      o6t: 'Chipta skaneri',
      o6p: 'Eshikda QR orqali kirish — navbat va qog‘oz ro‘yxatlarsiz.',
      o7tag: 'Yo‘lda',
      o7t: 'Yo‘ldaman!',
      o7p: 'Mehmon kelayotganini belgilaydi — kim yaqinlashayotganini ko‘rasiz.',
      faqTitle: 'Ko‘p so‘raladigan savollar',
      faqClose: 'Tushunarli',
      ctaEyebrow: 'Start',
      ctaChip1: '100% narx',
      ctaChip2: '5 daq',
      ctaChip3: 'yig‘imni mehmon to‘laydi',
      ctaTitle: 'Sotuvni boshlang.<br /><span class="cta-accent">Chipta narxi — sizniki</span>',
      ctaLead: 'Kabinetni ulaymiz, chekautni sozlaymiz va mehmon yig‘imini ko‘rsatamiz.',
      ctaStart: 'Sotuvni boshlash',
      ctaKp: 'Tijorat taklifini yuklash',
      ctaStat: 'chipta narxi sizga',
      cta1: 'Vitrina va smart-link',
      cta2: 'Brauzerda to‘lov',
      cta3: 'Abonent to‘lovisiz kabinet',
      footTag: 'Tashkilotchilar uchun tiketing',
      footFees: 'Yig‘imlar',
      footOrgs: 'Tashkilotchilar',
      footCta: 'Ariza',
      footCtaTitle: 'KP yuklab olish',
      footCtaSub: 'Tashkilotchilar uchun tijorat taklifi',
      footColProduct: 'Mahsulot',
      footColStart: 'Start',
      footColContact: 'Kontaktlar',
      footMade: 'Tashkilotchilar uchun yaratilgan',
      aggCost: (n) => `−${n} so‘m chiptadan`,
      tanCost: (n) => `0 so‘m ${n} narxidan`,
      money: (n) => `${n} so‘m`,
      faq: [
        {
          q: 'YaPI va «katta» kassasiz sotish mumkinmi?',
          a: 'Ha. Platforma tadbirkorlar, MChJ va o‘zini o‘zi band qilganlar uchun mos. Kichik tadbirlar uchun kabinet yetarli: e’lon qildingiz, narx qo‘ydingiz va telefondan kirishni sotasiz.',
        },
        {
          q: '1.5% va FixedFee ni kim to‘laydi?',
          a: 'Servis yig‘imini mehmon to‘lovda to‘laydi: ekvayring 1.5% + FixedFee. Biznes uchun ulanish bepul — sizga qo‘ygan chipta narxining 100% tushadi.',
        },
        {
          q: 'Chipta narxidan nima olaman?',
          a: '100 000 qo‘ydingiz — 100 000 oldingiz. Tashkilotchidan komissiyasiz va narxingiz ustiga ustama qo‘ymasdan: mijoz adolatli narxni ko‘radi, siz — chiptaning 100%.',
        },
        {
          q: 'Kabinet uchun abonent to‘lovi bormi?',
          a: 'Yo‘q. Kabinet va CRM — 0 so‘m. Obunasiz: sotasaniz — topasiz. Chiptadan barcha foyda sizniki.',
        },
        {
          q: 'Taneesh oddiy kassalardan nima farq qiladi?',
          a: 'Oddiy kassalar chiptadan 5–15% oladi, trafik kutadi va 1–2 chipta sotadi. Taneeshda: narxingizdan 0%, issiq trafik, guruh cheklari va ekvayring mehmon yig‘imida — cho‘ntagingizdan emas.',
        },
        {
          q: 'Tadbirga trafik qayerdan keladi?',
          a: 'Taneesh nafaqat chipta sotadi, odamlarni jalb qiladi: auditoriya bugun qayerga borishni qidirmoqda. Algoritmlar qiziqish bo‘yicha tavsiya qiladi — bu faol kanal.',
        },
        {
          q: 'Guruh cheklari qanday ishlaydi?',
          a: 'Ijtimoiy matching «kim bilan boraman»ni hal qiladi: mehmonlar kompaniya bo‘lib yig‘iladi va ko‘pincha 3–5 chipta oladi. O‘rtacha chek o‘sadi.',
        },
        {
          q: 'Mehmon ilovani yuklashi shartmi?',
          a: 'Yo‘q. Brauzerda 2 bosishda xarid — ilovasiz va ro‘yxatdan o‘tmasdan. Chekautda Humo / Uzcard.',
        },
        {
          q: 'Smart-link va vitrina nima?',
          a: 'Brendingiz va tadbirlaringiz bilan shaxsiy vitrina hamda Instagram, Telegram va reklamaga bitta smart-link. Havolani joylashtirdingiz — mehmonlar to‘g‘ridan-to‘g‘ri xaridga o‘tadi.',
        },
        {
          q: 'To‘lovlar qanday qabul qilinadi va pul qachon keladi?',
          a: 'To‘lov tizimi orqali xavfsiz ushlab turish bilan. Tadbirdan keyin to‘lovlar avtomatik. Kabinetda — balans va statistika real vaqtda.',
        },
        {
          q: 'Yirik hamkorlar uchun shartlar bormi?',
          a: 'Ha. Agentlik va maydonlar uchun FixedFee adminpanelda sozlanadi (ko‘pincha 3–5 ming so‘mdan). Biz — IT Park Uzbekistan rezidentimiz.',
        },
        {
          q: 'Boshlash uchun qancha vaqt kerak?',
          a: 'Odatda bir necha daqiqa yetadi: bog‘landingiz, kabinet va vitrina yaratdingiz, birinchi tadbirni e’lon qildingiz. Aloqa: taneesh.uz, @taneeshuz, +998 88 034 87 97.',
        },
      ],
    },
    en: {
      docTitle: 'Taneesh for organizers — tickets in 5 minutes',
      navAria: 'Navigation',
      navWhy: 'Why us',
      navIncluded: 'What you get',
      navFees: 'Fees',
      navOrgs: 'Organizers',
      navStart: 'Launch',
      changeLanguage: 'Change language',
      languageMenu: 'Interface language',
      heroEyebrow: 'Ticketing for organizers',
      heroTitle: 'Sell tickets.<br />Keep <span class="accent">100%</span> of the price',
      heroLead: 'Showcase in 5 minutes. Guests pay the fee — you keep 100% of the ticket price.',
      heroCta: 'Start selling',
      heroNote: 'No subscription · go live in 5 minutes',
      winAdmin: 'Admin',
      winAdminTitle: 'Weekend Stand-up',
      winSold: 'sold',
      winRevenue: 'revenue',
      winConv: 'conversion',
      winTickets: 'Tiers',
      winScan: 'Scanner',
      winScanHint: '68 / 70 checked in',
      winStore: 'Storefront',
      winAgent: 'Taneesh · Storefront',
      winAsk: 'Ask your storefront agent',
      winPill1: 'Payment done · Humo',
      winPill2: 'Ticket issued · QR ready',
      winPill3: 'Push to guest · “See you soon”',
      winPill4: 'Guest on the way',
      winPill5: 'Door scan ✓',
      m100: 'of ticket price to you',
      m5: 'to first showcase',
      m0: 'organizer subscription',
      whyEyebrow: 'Organizer economics',
      whyTitle: "Don't give away 15% per ticket",
      whyTicket: 'Concert ticket price',
      whyBad: 'Regular box office · 15%',
      whyGood: 'Taneesh · you keep 100%',
      whySaveLabel: 'saved per ticket vs 15% box office',
      whySavePack: 'Savings on 100 tickets',
      currency: 'sum',
      perTicket: 'per ticket',
      ofPrice: 'of the price',
      convEyebrow: 'Transparency',
      convTitle: 'Conversion in real time',
      livePill: 'Live · platform',
      liveDesc: 'Showcase → payment — no sugarcoating.',
      liveViews: 'Views now',
      livePays: 'Payments / hour',
      liveCheckout: 'To checkout',
      liveDrop: 'Cart abandoned',
      audTitle: 'Who it’s for',
      audSmallAlt: 'Small community event',
      audSmallTag: 'Your circle',
      audSmallH: 'Fun events without a business',
      audSmallP: 'Up to a hundred guests without IE or a cash desk — announce and sell entry.',
      audSmall1: 'Start in minutes',
      audSmall2: 'Pay from a phone',
      audSmall3: 'Group around the event',
      audLargeAlt: 'Large concert venue',
      audLargeTag: 'Scale',
      audLargeH: 'Agencies and venues',
      audLargeP: 'Event series and volume. FixedFee grows with you — custom settings in Super Admin.',
      audLarge1: 'Your FixedFee',
      audLarge2: 'Series and volume',
      audLarge3: 'One dashboard for everything',
      feesEyebrow: 'Fees',
      feesTitle: 'The guest pays the fee',
      feesYou: 'you · 100% of ticket price',
      feesGuest: 'guest pays',
      feesTicket: 'Ticket price',
      feesFix: 'FixedFee per guest',
      feesHint: 'For large partners — FixedFee from 3–5k in admin.',
      feesFeeRow: 'Fee from guest',
      feesAcq: 'acquiring 1.5%',
      flowEyebrow: 'Launch',
      flowTitle: 'Path in 5 minutes',
      flowLead: 'From cabinet to first payment — no box office, no subscription, no complex setup.',
      flowCta: 'Start selling',
      flow1t: 'Cabinet',
      flow1d: 'Create an organizer account',
      flow2t: 'Event',
      flow2d: 'Create an event and ticket prices',
      flow3t: 'Showcase',
      flow3d: 'Share the link on socials or wherever traffic is',
      flow4t: 'Payment',
      flow4d: 'Accept payment — with an online contract or at the door without one',
      flow5t: 'Group',
      flow5d: 'An event group is created',
      soon: 'soon',
      offerEyebrow: 'What you get',
      offerTitle: 'Features for sales',
      offerDl: 'Download commercial proposal',
      offerHint: 'Scroll right',
      offerAria: 'Platform features',
      o1tag: 'Showcase',
      o1t: 'Personal showcase',
      o1p: 'Event page and smart-link — one link for social and ads.',
      o2tag: 'Payment',
      o2t: 'Pay in 2 clicks',
      o2p: 'Guest pays in the browser — no app install.',
      o3tag: 'CRM',
      o3t: 'Guest CRM',
      o3p: 'Buyers, statuses, and contacts — in one cabinet.',
      o4tag: 'Refund',
      o4t: '1-click refund',
      o4p: 'Cancel and refund a ticket from the cabinet.',
      o5tag: 'Invites',
      o5t: 'Invitations',
      o5p: 'Send an invite — guest opens the showcase and buys.',
      o6tag: 'Scanner',
      o6t: 'Ticket scanner',
      o6p: 'QR entry at the door — no queues or paper lists.',
      o7tag: 'On the way',
      o7t: 'On my way!',
      o7p: 'Guest marks they are coming — you see who is approaching.',
      faqTitle: 'FAQ',
      faqClose: 'Got it',
      ctaEyebrow: 'Start',
      ctaChip1: '100% price',
      ctaChip2: '5 min',
      ctaChip3: 'guest pays the fee',
      ctaTitle: 'Start selling.<br /><span class="cta-accent">The ticket price is yours</span>',
      ctaLead: "We'll connect your cabinet, set up checkout, and show the guest fee.",
      ctaStart: 'Start selling',
      ctaKp: 'Download proposal',
      ctaStat: 'of ticket price to you',
      cta1: 'Showcase and smart-link',
      cta2: 'Pay in the browser',
      cta3: 'Cabinet with no subscription',
      footTag: 'Ticketing for organizers',
      footFees: 'Fees',
      footOrgs: 'Organizers',
      footCta: 'Apply',
      footCtaTitle: 'Download proposal',
      footCtaSub: 'Commercial proposal for organizers',
      footColProduct: 'Product',
      footColStart: 'Start',
      footColContact: 'Contact',
      footMade: 'Made for organizers',
      aggCost: (n) => `−${n} sum per ticket`,
      tanCost: (n) => `0 sum of ${n} price`,
      money: (n) => `${n} sum`,
      faq: [
        {
          q: 'Can I sell without an IE and a “big” cash desk?',
          a: 'Yes. The platform works for entrepreneurs, LLCs, and freelancers. For small community events a cabinet is enough: announce, set a price, and sell entry from a phone.',
        },
        {
          q: 'Who pays 1.5% and FixedFee?',
          a: 'The guest pays the service fee at checkout: 1.5% acquiring + FixedFee. Setup is free for business — you receive 100% of the ticket price you set.',
        },
        {
          q: 'What do I get from the ticket price?',
          a: 'Set 100,000 — get 100,000. No organizer commission and no markup on your price: guests see a fair price, you keep 100% of the ticket.',
        },
        {
          q: 'Is there a cabinet subscription?',
          a: 'No. Cabinet and CRM are 0 sum. No subscription: you sell — you earn. All ticket profit is yours.',
        },
        {
          q: 'How is Taneesh different from regular box offices?',
          a: 'Regular offices take 5–15% per ticket, wait for traffic, and sell 1–2 tickets. With Taneesh: 0% of your price, hot platform traffic, group checks, and acquiring in the guest fee — not from your pocket.',
        },
        {
          q: 'Where does event traffic come from?',
          a: 'Taneesh attracts people, not just sells tickets: the audience already looks for where to go today. Algorithms recommend by interests — an active channel, not a passive showcase.',
        },
        {
          q: 'How do group checks work?',
          a: 'Social matching solves “who to go with”: guests gather in companies and more often buy 3–5 tickets instead of one. Average check grows without extra ads.',
        },
        {
          q: 'Does the guest need to install an app?',
          a: 'No. Purchase in 2 clicks in the browser — no app registration or install. Humo / Uzcard at checkout.',
        },
        {
          q: 'What is a smart-link and showcase?',
          a: 'A personal showcase with your brand and events plus one smart-link for Instagram, Telegram, and ads. Share the link — guests go straight to purchase.',
        },
        {
          q: 'How are payments accepted and when do funds arrive?',
          a: 'Payment via a payment system with secure holding. After the event, payouts run automatically. In the cabinet — balance and stats in real time.',
        },
        {
          q: 'Are there terms for large partners?',
          a: 'Yes. For agencies and venues FixedFee is set in admin (often from 3–5k sum) — economics grow with volume. We are IT Park Uzbekistan residents.',
        },
        {
          q: 'How long does it take to launch?',
          a: 'Usually just minutes: contact us, create a cabinet and showcase, publish your first event. Contacts: taneesh.uz, @taneeshuz, +998 88 034 87 97.',
        },
      ],
    },
  };

  let locale = 'ru';

  function readStored() {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s === 'ru' || s === 'uz' || s === 'en') return s;
    } catch (_) {}
    return 'ru';
  }

  function persist(next) {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
  }

  function t() {
    return dict[locale] || dict.ru;
  }

  function localeTag() {
    return locale === 'en' ? 'en-US' : locale === 'uz' ? 'uz-UZ' : 'ru-RU';
  }

  function apply(next) {
    if (next) locale = next;
    else locale = readStored();
    persist(locale);
    const d = t();
    document.documentElement.lang = locale;
    document.title = d.docTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = d[key];
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = d[key];
      if (typeof val === 'string') el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = d[key];
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      const val = d[key];
      if (typeof val === 'string') el.setAttribute('alt', val);
    });

    // FAQ buttons + accordion answers
    const faqBtns = document.querySelectorAll('.faq-q[data-faq]');
    d.faq.forEach((item, i) => {
      if (faqBtns[i]) faqBtns[i].textContent = item.q;
      const ans = document.querySelector(`.faq-a[data-faq="${i}"]`);
      if (ans) ans.textContent = item.a;
    });

    // lang menu active state
    document.querySelectorAll('[data-locale-option]').forEach((btn) => {
      const id = btn.getAttribute('data-locale-option');
      btn.classList.toggle('is-active', id === locale);
      btn.setAttribute('aria-selected', id === locale ? 'true' : 'false');
    });
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.setAttribute('aria-label', d.changeLanguage);
    const langMenu = document.getElementById('langMenu');
    if (langMenu) langMenu.setAttribute('aria-label', d.languageMenu);

    window.dispatchEvent(new CustomEvent('taneesh:locale', { detail: { locale } }));
  }

  function init() {
    locale = readStored();
    apply(locale);

    const wrap = document.getElementById('langWrap');
    const btn = document.getElementById('langBtn');
    const menu = document.getElementById('langMenu');
    if (!wrap || !btn || !menu) return;

    const close = () => {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.hidden) open();
      else close();
    });
    menu.querySelectorAll('[data-locale-option]').forEach((opt) => {
      opt.addEventListener('click', () => {
        apply(opt.getAttribute('data-locale-option'));
        close();
      });
    });
    document.addEventListener('pointerdown', (e) => {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  return {
    LOCALES,
    get locale() {
      return locale;
    },
    t,
    localeTag,
    apply,
    init,
    faq: () => t().faq,
  };
})();
