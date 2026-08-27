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
      winBuy: 'Купить билет',
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
      liveRangeWeek: 'За неделю',
      liveRangeMonth: 'За месяц',
      liveRangeAll: 'За всё время',
      livePays: 'Оплаты / час',
      liveCheckout: 'До чекаута',
      liveDrop: 'Бросили корзину',
      audTitle: 'Для кого это',
      audSmallAlt: 'Частный организатор без ИП',
      audSmallTag: 'Физлица',
      audSmallH: 'Частные организаторы',
      audSmallP: 'Продавайте билеты без открытия ИП, ООО или установки кассового аппарата. Идеально для комьюнити, лекций и небольших туров.',
      audSmall1: 'Без ИП и кассы',
      audSmall2: 'Комьюнити и лекции',
      audSmall3: 'Старт за минуты',
      audLargeAlt: 'Бизнес, агентства и площадки',
      audLargeTag: 'Бизнес',
      audLargeH: 'Бизнес и агентства',
      audLargeP: 'Официальная работа для ИП и юридических лиц. Большие объемы продаж, закрывающие документы и эксклюзивные скидки на сервисный сбор.',
      audLarge1: 'Закрывающие документы',
      audLarge2: 'Объём и скидки на сбор',
      audLarge3: 'ИП, ООО и самозанятые',
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
      flowTitle: 'Запуск за 5 минут',
      flowLead: 'От регистрации до пропуска гостей на входе — без кассы, без абонентки и без сложной настройки.',
      flowCta: 'Запустить продажи',
      flow1t: 'Кабинет',
      flow1d: 'Зарегистрируйте аккаунт организатора за пару минут.',
      flow2t: 'Событие',
      flow2d: 'Добавьте описание мероприятия, типы билетов и их стоимость.',
      flow3t: 'Витрина',
      flow3d: 'Опубликуйте готовую ссылку на покупку в соцсетях или Telegram.',
      flow4t: 'Оплата',
      flow4d: 'Гости покупают билеты картами Uzcard или Humo прямо со смартфона.',
      flow5t: 'Пропуск гостей',
      flow5d: 'Сканируйте QR-коды на билетах прямо с телефона. Пропускайте гостей без очередей и списков.',
      soon: 'скоро',
      offerEyebrow: 'Возможности',
      offerTitle: 'Возможности платформы',
      offerDl: 'Скачать коммерческое предложение',
      offerHint: 'Листайте вправо',
      offerAria: 'Возможности платформы',
      o1tag: 'Витрина',
      o1t: 'Личная витрина',
      o1p: 'Страница события и смарт-ссылка для таргета и соцсетей в одном месте.',
      o2tag: 'Оплата',
      o2t: 'Оплата в 2 клика',
      o2p: 'Гость платит прямо в браузере телефона — ничего скачивать не нужно.',
      o3tag: 'CRM',
      o3t: 'CRM для гостей',
      o3p: 'Список покупателей, статусы оплат и контактные данные в едином дашборде.',
      o4tag: 'Возврат',
      o4t: 'Возврат в 1 клик',
      o4p: 'Мгновенно отменяйте и возвращайте билеты без долгих переписок с поддержкой.',
      o5tag: 'Приглашения',
      o5t: 'VIP-приглашения',
      o5p: 'Генерируйте закрытые ссылки или бесплатные билеты для особых гостей и партнеров.',
      o6tag: 'Сканер',
      o6t: 'Умный сканер',
      o6p: 'Быстрый контроль на входе по QR-кодам. Исключает подделки и повторные проходы.',
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
          a: 'Да. Частным организаторам достаточно кабинета — без ИП, ООО и кассового аппарата: объявили событие, выставили цену и продаёте вход с телефона. Для ИП, ООО и самозанятых доступна официальная схема с документами.',
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
      winBuy: 'Chipta sotib olish',
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
      liveRangeWeek: 'Hafta uchun',
      liveRangeMonth: 'Oy uchun',
      liveRangeAll: 'Butun vaqt',
      livePays: 'To‘lovlar / soat',
      liveCheckout: 'Chekautgacha',
      liveDrop: 'Savatni tashlashdi',
      audTitle: 'Kimlar uchun',
      audSmallAlt: 'YaPIsiz xususiy tashkilotchi',
      audSmallTag: 'Jismoniy shaxslar',
      audSmallH: 'Xususiy tashkilotchilar',
      audSmallP: 'YaPI, MChJ ochmasdan va kassa o‘rnatmasdan chipta soting. Kommyuniti, ma’ruzalar va kichik turlar uchun ideal.',
      audSmall1: 'YaPI va kassasiz',
      audSmall2: 'Kommyuniti va ma’ruzalar',
      audSmall3: 'Daqiqalarda start',
      audLargeAlt: 'Biznes, agentliklar va maydonlar',
      audLargeTag: 'Biznes',
      audLargeH: 'Biznes va agentliklar',
      audLargeP: 'YaPI va yuridik shaxslar uchun rasmiy ish. Katta sotuv hajmi, yopuvchi hujjatlar va servis yig‘imiga eksklyuziv chegirmalar.',
      audLarge1: 'Yopuvchi hujjatlar',
      audLarge2: 'Hajm va yig‘im chegirmalari',
      audLarge3: 'YaPI, MChJ va o‘zini o‘zi band qilganlar',
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
      flowTitle: '5 daqiqada ishga tushirish',
      flowLead: 'Ro‘yxatdan o‘tishdan kirishda mehmonlarni o‘tkazishgacha — kassasiz, abonentsiz va murakkab sozlamalarsiz.',
      flowCta: 'Sotuvni boshlash',
      flow1t: 'Kabinet',
      flow1d: 'Bir necha daqiqada tashkilotchi akkauntini ro‘yxatdan o‘tkazing.',
      flow2t: 'Tadbir',
      flow2d: 'Tadbir tavsifi, chipta turlari va narxlarini qo‘shing.',
      flow3t: 'Vitrina',
      flow3d: 'Tayyor xarid havolasini ijtimoiy tarmoqlar yoki Telegram’da joylashtiring.',
      flow4t: 'To‘lov',
      flow4d: 'Mehmonlar Uzcard yoki Humo kartalari bilan smartfondan chipta sotib oladi.',
      flow5t: 'Mehmonlarni o‘tkazish',
      flow5d: 'Chiptadagi QR-kodlarni telefondan skanerlang. Navbat va ro‘yxatlarsiz o‘tkazing.',
      soon: 'tez orada',
      offerEyebrow: 'Imkoniyatlar',
      offerTitle: 'Platforma imkoniyatlari',
      offerDl: 'Tijorat taklifini yuklab olish',
      offerHint: 'O‘ngga suring',
      offerAria: 'Platforma imkoniyatlari',
      o1tag: 'Vitrina',
      o1t: 'Shaxsiy vitrina',
      o1p: 'Tadbir sahifasi va target hamda ijtimoiy tarmoqlar uchun smart-havola — bir joyda.',
      o2tag: 'To‘lov',
      o2t: '2 bosishda to‘lov',
      o2p: 'Mehmon telefon brauzerida to‘laydi — hech narsa yuklab olish shart emas.',
      o3tag: 'CRM',
      o3t: 'Mehmonlar uchun CRM',
      o3p: 'Xaridorlar, to‘lov statuslari va kontaktlar — yagona dashboardda.',
      o4tag: 'Qaytarish',
      o4t: '1 bosishda qaytarish',
      o4p: 'Chiptalarni darhol bekor qiling va qaytaring — qo‘llab-quvvatlash bilan uzoq yozishmalarsiz.',
      o5tag: 'Taklifnomalar',
      o5t: 'VIP-taklifnomalar',
      o5p: 'Maxsus mehmon va hamkorlar uchun yopiq havola yoki bepul chipta yarating.',
      o6tag: 'Skaner',
      o6t: 'Aqlli skaner',
      o6p: 'Kirishda QR orqali tez nazorat. Soxta va qayta o‘tishlarni oldini oladi.',
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
          a: 'Ha. Xususiy tashkilotchilarga kabinet yetarli — YaPI, MChJ va kassasiz: tadbir e’lon qildingiz, narx qo‘ydingiz va telefondan kirishni sotasiz. YaPI, MChJ va o‘zini o‘zi band qilganlar uchun hujjatli rasmiy sxema mavjud.',
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
      winBuy: 'Buy ticket',
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
      liveRangeWeek: 'This week',
      liveRangeMonth: 'This month',
      liveRangeAll: 'All time',
      livePays: 'Payments / hour',
      liveCheckout: 'To checkout',
      liveDrop: 'Cart abandoned',
      audTitle: 'Who it’s for',
      audSmallAlt: 'Private organizer without a business',
      audSmallTag: 'Individuals',
      audSmallH: 'Private organizers',
      audSmallP: 'Sell tickets without opening an IE, LLC, or installing a cash desk. Ideal for communities, talks, and small tours.',
      audSmall1: 'No IE or cash desk',
      audSmall2: 'Communities and talks',
      audSmall3: 'Live in minutes',
      audLargeAlt: 'Business, agencies, and venues',
      audLargeTag: 'Business',
      audLargeH: 'Business and agencies',
      audLargeP: 'Official setup for IEs and legal entities. High sales volume, closing documents, and exclusive discounts on the service fee.',
      audLarge1: 'Closing documents',
      audLarge2: 'Volume and fee discounts',
      audLarge3: 'IE, LLC, and freelancers',
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
      flowTitle: 'Go live in 5 minutes',
      flowLead: 'From signup to door check-in — no box office, no subscription, no complex setup.',
      flowCta: 'Start selling',
      flow1t: 'Cabinet',
      flow1d: 'Register an organizer account in a couple of minutes.',
      flow2t: 'Event',
      flow2d: 'Add the event description, ticket types, and prices.',
      flow3t: 'Showcase',
      flow3d: 'Publish the ready purchase link on socials or Telegram.',
      flow4t: 'Payment',
      flow4d: 'Guests buy tickets with Uzcard or Humo right from their phone.',
      flow5t: 'Guest check-in',
      flow5d: 'Scan ticket QR codes from your phone. Let guests in without queues or lists.',
      soon: 'soon',
      offerEyebrow: 'Capabilities',
      offerTitle: 'Platform capabilities',
      offerDl: 'Download commercial proposal',
      offerHint: 'Scroll right',
      offerAria: 'Platform capabilities',
      o1tag: 'Showcase',
      o1t: 'Personal showcase',
      o1p: 'Event page and smart-link for ads and socials — in one place.',
      o2tag: 'Payment',
      o2t: 'Pay in 2 clicks',
      o2p: 'Guests pay in the phone browser — nothing to download.',
      o3tag: 'CRM',
      o3t: 'Guest CRM',
      o3p: 'Buyers, payment statuses, and contacts in one dashboard.',
      o4tag: 'Refund',
      o4t: '1-click refund',
      o4p: 'Cancel and refund tickets instantly — no long support threads.',
      o5tag: 'Invites',
      o5t: 'VIP invitations',
      o5p: 'Generate private links or free tickets for special guests and partners.',
      o6tag: 'Scanner',
      o6t: 'Smart scanner',
      o6p: 'Fast QR door control. Blocks fakes and double entries.',
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
          a: 'Yes. Private organizers only need a cabinet — no IE, LLC, or cash desk: announce an event, set a price, and sell entry from a phone. IEs, LLCs, and freelancers get an official setup with documents.',
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
