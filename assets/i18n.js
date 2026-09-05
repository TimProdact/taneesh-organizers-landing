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
      navTickets: 'Типы билетов',
      navOrgs: 'Для кого',
      navStart: 'Запустить',
      changeLanguage: 'Сменить язык',
      livePeriodAria: 'Период',
      flowStepsAria: '5 шагов',
      footerNavAria: 'Навигация',
      metaDescription: 'Тикетинг для организаторов: витрина за 5 минут, цена билета — вам целиком. Сбор 1.5% + FixedFee платит гость.',
      languageMenu: 'Язык интерфейса',
      heroEyebrow: 'Тикетинг для организаторов',
      heroTitle: 'Продавайте билеты.<br />Получайте <span class="accent">100%</span> цены',
      heroLead: 'Не «ещё одна касса-посредник», а инфраструктура: витрина за 5 минут, честный чекаут и 100% цены билета — вам.',
      heroCta: 'Запустить продажи',
      whyEyebrow: 'Экономика организатора',
      whyTitle: 'Не отдавайте 15% с билета',
      whyGood: 'Taneesh · онлайн вам 100%',
      whySaveLabel: 'экономия с 1 билета vs до 15% касса',
      whySavePack: 'Экономия на 100 билетах',
      currency: 'сум',
      convEyebrow: 'Прозрачность',
      convTitle: 'Конверсия в реальном времени',
      convRateLabel: 'Конверсия',
      liveDesc: 'Витрина → оплата — без приукрашивания.',
      liveViews: 'Просмотры сейчас',
      liveRangeWeek: 'За неделю',
      liveRangeMonth: 'За месяц',
      liveRangeAll: 'За всё время',
      livePays: 'Оплаты / час',
      liveCheckout: 'До чекаута',
      liveDrop: 'Бросили корзину',
      audTitle: 'Для кого это',
      audEyebrow: 'Аудитория',
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
      feesFeeRow: 'Сбор с гостя',
      feesAcq: 'эквайринг 1.5%',
      flowEyebrow: 'Запуск',
      flowStepsTitle: 'Как это работает',
      flowStepsLead: 'Пять шагов — от кабинета до сканера на входе.',
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
      offerAria: 'Возможности',
      o1tag: 'Витрина',
      o1t: 'Личная витрина',
      o1p: 'Страница события и смарт-ссылка для таргета и соцсетей в одном месте.',
      o2tag: 'Оплата',
      o2t: 'Оплата в 2 клика',
      o2p: 'Гость платит прямо в браузере — ничего скачивать не нужно.',
      o3tag: 'CRM',
      o3t: 'CRM для гостей',
      o3p: 'Список покупателей, статусы оплат и контакты — всё ваше, с выгрузкой базы. Стройте свой LTV, а не отдавайте данные кассе.',
      o4tag: 'Возврат',
      o4t: 'Возврат в 1 клик',
      o4p: 'Мгновенно отменяйте и возвращайте билеты без долгих переписок с поддержкой.',
      o5tag: 'Приглашения',
      o5t: 'VIP-приглашения',
      o5p: 'Добавляйте особых гостей и партнёров в список — бесплатные VIP-билеты без кассы.',
      o6tag: 'Сканер',
      o6t: 'Быстрый, удобный сканер',
      o6p: 'Быстрый контроль на входе по QR-кодам. Исключает подделки и повторные проходы.',
      fpShowPublished: 'Опубликовано',
      fpShowMeta: '12 апр · 20:00 · Ташкент',
      fpShowAtDoor: 'У двери',
      fpShowFromTicket: 'от билета',
      fpShowBuy: 'Купить билет',
      fpShowViews: 'Просмотры',
      fpShowClicks: 'Переходы',
      fpShowSmartLink: 'Смарт-ссылка',
      fpShowCopied: 'Скопировано',
      fpPayReg: 'Регистрация',
      fpPayForWhom: 'Кому билеты',
      fpPayPhone: 'Телефон',
      fpPayMethod: 'Способ оплаты',
      fpPayTicket: 'Цена билета',
      fpPayAcq: 'Эквайринг 1.5%',
      fpPayFee: 'FixedFee на гостя',
      fpPayGuestPays: 'Гость платит',
      fpPayCta: 'Оплатить 105 000',
      fpPayPaying: 'Оплата…',
      fpPayPaid: 'Оплачено',
      fpPayTicketSent: 'Билет уже у гостя',
      fpCrmSearch: 'Поиск по имени, телефону или email…',
      fpCrmExport: 'Экспорт CSV',
      fpCrmGuest: 'Гость',
      fpCrmSum: 'Сумма',
      fpCrmTickets: 'Билеты',
      fpCrmStatus: 'Статус',
      fpCrmPaid: 'Оплачен',
      fpCrmToast: 'CSV скачан',
      fpRefundOrder: 'Заказ #4821',
      fpRefundToRefund: 'К возврату',
      fpRefundBtn: 'Вернуть билет',
      fpRefundConfirmQ: 'Подтвердить возврат?',
      fpRefundConfirm: 'Подтвердить',
      fpRefundPaid: 'Оплачен',
      fpRefundDone: 'Возвращён',
      fpInviteAdd: '+ Пригласить',
      fpInviteInvited: 'Приглашён',
      fpInviteCheckedIn: 'Прошел',
      fpInviteGuest: 'Гость',
      fpScanOk: 'Гость пропущен',
      fpScanAlready: 'Уже прошёл',
      fpScanEntry: 'Вход',
      fpScanDup: 'Повторный QR',
      fpScanQrAlt: 'QR-код билета https://taneesh.uz/t/NG-4821',
      faqTitle: 'Часто задаваемые вопросы',
      faqEyebrow: 'FAQ',
      nicheEyebrow: 'Форматы событий',
      nicheAria: 'Форматы событий',
      nicheTitle: 'Тикетинг под любой формат',
      nicheLead: 'От стендапа до турнира — одна витрина, один чекаут, один сканер на входе.',
      ttEyebrow: 'Типы билетов',
      ttTitle: 'Как продать вход под ваш формат',
      ttLead: 'Один главный сценарий оплаты — и три режима рядом, когда нужен другой формат.',
      ttOnlineTitle: 'Платно онлайн',
      ttOnlineDesc: 'Гость оплачивает билет на витрине, сразу получает QR. Вам уходит вся цена билета.',
      ttOnlineBadge: 'Онлайн: 100% цены — вам',
      ttDoorTitle: 'Оплата на входе',
      ttDoorDesc: 'Гость бронирует место заранее. Цену билета платит вам у двери.',
      ttDoorBadge: 'Деньги — у двери',
      ttFreeTitle: 'Бесплатно',
      ttFreeDesc: 'Регистрация без оплаты. QR — сразу или после вашего одобрения.',
      ttFreeBadge: 'Без оплаты',
      ttVipTitle: 'Приглашение',
      ttVipDesc: 'Закрытая ссылка для партнёров и VIP. На сканере — статус «Приглашён».',
      ttVipBadge: 'Только по ссылке',
      ttOnlineWhen: 'Когда выбирать: концерты, стендап, конференции, платный вход',
      ttDoorWhen: 'Когда: вечеринки, open-air, когда важна оплата на месте',
      ttFreeWhen: 'Когда: лекции, комьюнити, набор по заявкам',
      ttVipWhen: 'Когда: пресса, гости, команда, партнёры',
      niche1: 'Стендап-концерты',
      niche2: 'Бизнес-конференции',
      niche3: 'Концерты и шоу',
      niche4: 'Спортивные турниры',
      niche5: 'Мастер-классы',
      niche6: 'Вечеринки и тусовки',
      formatStream: [
        ['Стендап', 'Бизнес-конференции', 'Концерты', 'Спорт', 'Мастер-классы', 'Вечеринки', 'Фестивали', 'Нетворкинг', 'Open air', 'Квизы'],
        ['Йога', 'Лекции', 'Кино', 'Выставки', 'Хакатоны', 'Тренинги', 'Gastro', 'Маркеты', 'Митапы', 'Дегустации'],
        ['Караоке', 'Форумы', 'Театр', 'Танцы', 'Кемпы', 'Esports', 'Fashion', 'Медитации', 'Аукционы', 'Stand-up battle'],
        ['Благотворительность', 'Детские праздники', 'Корпоративы', 'DJ-сеты', 'Poetry slam', 'Фотодни', 'VR-шоу', 'City tours', 'Wine tasting', 'Hack night'],
      ],
      quoteBadge: 'Что говорят организаторы',
      payEyebrow: 'Платежи',
      ctaEyebrow: 'Старт',
      ctaKp: 'Скачать КП',
      ctaStat: 'цены билета вам',
      footHeadline: 'Тикетинг, витрина и CRM — для организаторов',
      footPowered: 'Powered by',
      footGuestApp: 'Приложение для гостей',
      footCta: 'Заявка',
      leadModalTitle: 'Заявка на подключение',
      leadModalSubtitle: 'Оставьте контакт — перезвоним и поможем запустить продажи.',
      leadPhoneLabel: 'Телефон',
      leadPhonePlaceholder: '+998 90 123 45 67',
      leadNameLabel: 'Имя',
      leadNamePlaceholder: 'Как к вам обращаться',
      leadDescLabel: 'О мероприятии',
      leadDescPlaceholder: 'Формат, дата, город — что угодно полезное',
      leadSubmit: 'Отправить заявку',
      leadClose: 'Закрыть',
      leadSuccessTitle: 'Заявка отправлена',
      leadSuccessText: 'Мы свяжемся с вами в ближайшее время.',
      leadErrorText: 'Не удалось отправить. Попробуйте ещё раз или позвоните нам.',
      leadErrorConfig: 'Форма временно недоступна. Позвоните +998 88 034 87 97.',
      leadPhoneError: 'Укажите номер в формате +998 90 123 45 67',
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
          a: 'Обычные кассы берут до 15% с билета. У Taneesh: 0% с вашей цены при оплате онлайн, а эквайринг и FixedFee — в сборе с гостя, не из вашего кармана.',
        },
        {
          q: 'Какие оплаты доступны и когда выплата?',
          a: 'Сейчас доступны Uzcard и Humo. Visa и Mastercard — скоро. Транзакции защищены, деньги приходят организатору по понятному графику.',
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
      navTickets: 'Chipta turlari',
      navOrgs: 'Kimlar uchun',
      navStart: 'Boshlash',
      changeLanguage: 'Tilni almashtirish',
      livePeriodAria: 'Davr',
      flowStepsAria: '5 qadam',
      footerNavAria: 'Navigatsiya',
      metaDescription: 'Tashkilotchilar uchun tiketing: 5 daqiqada vitrina, chipta narxi to‘liq sizniki. Yig‘im 1.5% + FixedFee ni mehmon to‘laydi.',
      languageMenu: 'Interfeys tili',
      heroEyebrow: 'Tashkilotchilar uchun tiketing',
      heroTitle: 'Chiptalarni soting.<br />Narxning <span class="accent">100%</span>ini oling',
      heroLead: 'Nafaqat «yana bir kassa-vositachi», balki infratuzilma: 5 daqiqada vitrina, halol chekaut va chipta narxining 100% — sizga.',
      heroCta: 'Sotuvni boshlash',
      whyEyebrow: 'Tashkilotchi iqtisodi',
      whyTitle: 'Chiptadan 15% bermang',
      whyGood: 'Taneesh · onlayn sizga 100%',
      whySaveLabel: '1 chiptadan tejam · 15%gacha kassaga nisbatan',
      whySavePack: '100 chiptadagi tejam',
      currency: 'so‘m',
      convEyebrow: 'Shaffoflik',
      convTitle: 'Real vaqtda konversiya',
      convRateLabel: 'Konversiya',
      liveDesc: 'Vitrina → to‘lov — bezatmasdan.',
      liveViews: 'Hozirgi ko‘rishlar',
      liveRangeWeek: 'Hafta uchun',
      liveRangeMonth: 'Oy uchun',
      liveRangeAll: 'Butun vaqt',
      livePays: 'To‘lovlar / soat',
      liveCheckout: 'Chekautgacha',
      liveDrop: 'Savatni tashlashdi',
      audTitle: 'Kimlar uchun',
      audEyebrow: 'Auditoriya',
      audSmallAlt: 'IPsiz xususiy tashkilotchi',
      audSmallTag: 'Jismoniy shaxslar',
      audSmallH: 'Xususiy tashkilotchilar',
      audSmallP: 'IP, MChJ ochmasdan va kassa o‘rnatmasdan chipta soting. Kommyuniti, ma’ruzalar va kichik turlar uchun ideal.',
      audSmall1: 'IP va kassasiz',
      audSmall2: 'Kommyuniti va ma’ruzalar',
      audSmall3: 'Daqiqalarda start',
      audLargeAlt: 'Biznes, agentliklar va maydonlar',
      audLargeTag: 'Biznes',
      audLargeH: 'Biznes va agentliklar',
      audLargeP: 'IP va yuridik shaxslar uchun rasmiy ish. Katta sotuv hajmi, yopuvchi hujjatlar va servis yig‘imiga eksklyuziv chegirmalar.',
      audLarge1: 'Yopuvchi hujjatlar',
      audLarge2: 'Hajm va yig‘im chegirmalari',
      audLarge3: 'IP, MChJ va o‘zini o‘zi band qilganlar',
      feesEyebrow: 'Yig‘imlar',
      feesTitle: 'Yig‘imni mehmon to‘laydi',
      feesYou: 'sizga · chipta narxining 100%',
      feesGuest: 'mehmon to‘laydi',
      feesTicket: 'Chipta narxi',
      feesFix: 'Mehmonga FixedFee',
      feesFeeRow: 'Mehmon yig‘imi',
      feesAcq: 'ekvayring 1.5%',
      flowEyebrow: 'Start',
      flowStepsTitle: 'Qanday ishlaydi',
      flowStepsLead: 'Beshta qadam — kabinetdan kirishdagi skanergacha.',
      flowTitle: '5 daqiqada ishga tushirish',
      flowLead: 'Ro‘yxatdan o‘tishdan kirishda mehmonlarni o‘tkazishgacha — kassasiz, abonentsiz va murakkab sozlamalarsiz.',
      flowCta: 'Sotuvni ishga tushirish',
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
      offerAria: 'Imkoniyatlar',
      o1tag: 'Vitrina',
      o1t: 'Shaxsiy vitrina',
      o1p: 'Tadbir sahifasi va target hamda ijtimoiy tarmoqlar uchun smart-havola — bir joyda.',
      o2tag: 'To‘lov',
      o2t: '2 bosishda to‘lov',
      o2p: 'Mehmon brauzerda to‘laydi — hech narsa yuklab olish shart emas.',
      o3tag: 'CRM',
      o3t: 'Mehmonlar uchun CRM',
      o3p: 'Xaridorlar, to‘lov statuslari va kontaktlar — barchasi sizniki, bazani eksport qilish bilan. O‘z LTV ni quring, ma‘lumotni kassaga bermang.',
      o4tag: 'Qaytarish',
      o4t: '1 bosishda qaytarish',
      o4p: 'Chiptalarni darhol bekor qiling va qaytaring — qo‘llab-quvvatlash bilan uzoq yozishmalarsiz.',
      o5tag: 'Taklifnomalar',
      o5t: 'VIP-taklifnomalar',
      o5p: 'Maxsus mehmon va hamkorlarni ro‘yxatga qo‘shing — kassasiz bepul VIP chiptalar.',
      o6tag: 'Skaner',
      o6t: 'Tez va qulay skaner',
      o6p: 'Kirishda QR orqali tez nazorat. Soxta va qayta o‘tishlarni oldini oladi.',
      fpShowPublished: 'Chop etilgan',
      fpShowMeta: '12 apr · 20:00 · Toshkent',
      fpShowAtDoor: 'Kirishda',
      fpShowFromTicket: 'chiptadan',
      fpShowBuy: 'Chipta sotib olish',
      fpShowViews: 'Ko‘rishlar',
      fpShowClicks: 'O‘tishlar',
      fpShowSmartLink: 'Smart-havola',
      fpShowCopied: 'Nusxa olindi',
      fpPayReg: 'Ro‘yxatdan o‘tish',
      fpPayForWhom: 'Chiptalar kimga',
      fpPayPhone: 'Telefon',
      fpPayMethod: 'To‘lov usuli',
      fpPayTicket: 'Chipta narxi',
      fpPayAcq: 'Ekvayring 1.5%',
      fpPayFee: 'Mehmon FixedFee',
      fpPayGuestPays: 'Mehmon to‘laydi',
      fpPayCta: 'To‘lash 105 000',
      fpPayPaying: 'To‘lov…',
      fpPayPaid: 'To‘landi',
      fpPayTicketSent: 'Chipta mehmonda',
      fpCrmSearch: 'Ism, telefon yoki email bo‘yicha qidiruv…',
      fpCrmExport: 'CSV eksport',
      fpCrmGuest: 'Mehmon',
      fpCrmSum: 'Summa',
      fpCrmTickets: 'Chiptalar',
      fpCrmStatus: 'Holat',
      fpCrmPaid: 'To‘langan',
      fpCrmToast: 'CSV yuklab olindi',
      fpRefundOrder: 'Buyurtma #4821',
      fpRefundToRefund: 'Qaytarishga',
      fpRefundBtn: 'Chiptani qaytarish',
      fpRefundConfirmQ: 'Qaytarishni tasdiqlaysizmi?',
      fpRefundConfirm: 'Tasdiqlash',
      fpRefundPaid: 'To‘langan',
      fpRefundDone: 'Qaytarildi',
      fpInviteAdd: '+ Taklif qilish',
      fpInviteInvited: 'Taklif qilindi',
      fpInviteCheckedIn: 'O‘tdi',
      fpInviteGuest: 'Mehmon',
      fpScanOk: 'Mehmon o‘tkazildi',
      fpScanAlready: 'Allaqachon o‘tgan',
      fpScanEntry: 'Kirish',
      fpScanDup: 'Takroriy QR',
      fpScanQrAlt: 'Chipta QR-kodi https://taneesh.uz/t/NG-4821',
      faqTitle: 'Ko‘p so‘raladigan savollar',
      faqEyebrow: 'FAQ',
      nicheEyebrow: 'Tadbir formatlari',
      nicheAria: 'Tadbir formatlari',
      nicheTitle: 'Har qanday format uchun tiketing',
      nicheLead: 'Stand-updan turnirgacha — bitta vitrina, bitta chekaut, kirishda bitta skaner.',
      ttEyebrow: 'Chipta turlari',
      ttTitle: 'Formatingizga mos kirishni qanday sotish',
      ttLead: 'Asosiy to‘lov ssenariysi — va boshqa format kerak bo‘lganda uchta rejim yonida.',
      ttOnlineTitle: 'Pullik onlayn',
      ttOnlineDesc: 'Mehmon vitrinada to‘laydi va darhol QR oladi. Chipta narxining hammasi sizga o‘tadi.',
      ttOnlineBadge: 'Onlayn: narxning 100% — sizga',
      ttDoorTitle: 'Kirishda to‘lov',
      ttDoorDesc: 'Mehmon joyini oldindan bron qiladi. Chipta narxini eshikda sizga to‘laydi.',
      ttDoorBadge: 'Pul — eshikda',
      ttFreeTitle: 'Bepul',
      ttFreeDesc: 'To‘lovsiz ro‘yxat. QR — darhol yoki siz tasdiqlaganingizdan keyin.',
      ttFreeBadge: 'To‘lovsiz',
      ttVipTitle: 'Taklifnoma',
      ttVipDesc: 'Hamkorlar va VIP uchun yopiq havola. Skanerda — «Taklif qilingan» statusi.',
      ttVipBadge: 'Faqat havola orqali',
      ttOnlineWhen: 'Qachon: konsertlar, stendap, konferensiyalar, pullik kirish',
      ttDoorWhen: 'Qachon: kechalar, open-air, joyida to‘lov muhim bo‘lganda',
      ttFreeWhen: 'Qachon: ma’ruzalar, community, ariza bo‘yicha yig‘ish',
      ttVipWhen: 'Qachon: matbuot, mehmonlar, jamoa, hamkorlar',
      niche1: 'Stand-up konsertlar',
      niche2: 'Biznes-konferensiyalar',
      niche3: 'Konsert va shoular',
      niche4: 'Sport turnirlari',
      niche5: 'Master-klasslar',
      niche6: 'Kechki bazmlar',
      formatStream: [
        ['Stand-up', 'Biznes-konferensiyalar', 'Konsertlar', 'Sport', 'Master-klasslar', 'Kechki bazmlar', 'Festivallar', 'Networking', 'Open air', 'Viktorinalar'],
        ['Yoga', 'Ma’ruzalar', 'Kino', 'Ko‘rgazmalar', 'Xakatonlar', 'Treninglar', 'Gastro', 'Marketlar', 'Mitaplar', 'Degustatsiya'],
        ['Karaoke', 'Forumlar', 'Teatr', 'Raqs', 'Kemplar', 'Esports', 'Fashion', 'Meditatsiya', 'Auksionlar', 'Stand-up battle'],
        ['Xayriya', 'Bolalar bayrami', 'Korporativlar', 'DJ-set', 'Poetry slam', 'Foto kun', 'VR-shou', 'City tours', 'Wine tasting', 'Hack night'],
      ],
      quoteBadge: 'Tashkilotchilar nima deydi',
      payEyebrow: 'To‘lovlar',
      ctaEyebrow: 'Start',
      ctaKp: 'Tijorat taklifini yuklash',
      ctaStat: 'chipta narxi sizga',
      footHeadline: 'Tiketing, vitrina va CRM — tashkilotchilar uchun',
      footPowered: 'Powered by',
      footGuestApp: 'Mehmonlar ilovasi',
      footCta: 'Ariza',
      leadModalTitle: 'Ulanish uchun ariza',
      leadModalSubtitle: 'Kontactingizni qoldiring — qo‘ng‘iroq qilib, sotuvni boshlashga yordam beramiz.',
      leadPhoneLabel: 'Telefon',
      leadPhonePlaceholder: '+998 90 123 45 67',
      leadNameLabel: 'Ism',
      leadNamePlaceholder: 'Sizga qanday murojaat qilamiz',
      leadDescLabel: 'Tadbir haqida',
      leadDescPlaceholder: 'Format, sana, shahar — foydali har qanday ma’lumot',
      leadSubmit: 'Arizani yuborish',
      leadClose: 'Yopish',
      leadSuccessTitle: 'Ariza yuborildi',
      leadSuccessText: 'Tez orada siz bilan bog‘lanamiz.',
      leadErrorText: 'Yuborib bo‘lmadi. Qayta urining yoki qo‘ng‘iroq qiling.',
      leadErrorConfig: 'Forma vaqtincha ishlamayapti. +998 88 034 87 97 ga qo‘ng‘iroq qiling.',
      leadPhoneError: 'Raqamni +998 90 123 45 67 formatida kiriting',
      aggCost: (n) => `−${n} so‘m chiptadan`,
      tanCost: (n) => `0 so‘m ${n} narxidan`,
      money: (n) => `${n} so‘m`,
      faq: [
        {
          q: 'IP va «katta» kassasiz sotish mumkinmi?',
          a: 'Ha. Xususiy tashkilotchilarga kabinet yetarli — IP, MChJ va kassasiz: tadbir e’lon qildingiz, narx qo‘ydingiz va telefondan kirishni sotasiz. IP, MChJ va o‘zini o‘zi band qilganlar uchun hujjatli rasmiy sxema mavjud.',
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
          a: 'Oddiy kassalar chiptadan 15%gacha oladi. Taneeshda: onlayn to‘lovda narxingizdan 0%, ekvayring va FixedFee mehmon yig‘imida — cho‘ntagingizdan emas.',
        },
        {
          q: 'Qanday to‘lovlar bor va pul qachon tushadi?',
          a: 'Hozir Uzcard va Humo mavjud. Visa va Mastercard — tez orada. Tranzaksiyalar himoyalangan, pul tashkilotchiga tushunarli jadval bo‘yicha keladi.',
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
      navTickets: 'Ticket types',
      navOrgs: 'Who it’s for',
      navStart: 'Launch',
      changeLanguage: 'Change language',
      livePeriodAria: 'Period',
      flowStepsAria: '5 steps',
      footerNavAria: 'Navigation',
      metaDescription: 'Ticketing for organizers: a showcase in 5 minutes, you keep 100% of ticket price. Guest pays 1.5% + FixedFee.',
      languageMenu: 'Interface language',
      heroEyebrow: 'Ticketing for organizers',
      heroTitle: 'Sell tickets.<br />Keep <span class="accent">100%</span> of the price',
      heroLead: 'Not "just another cash-desk middleman", but infrastructure: a showcase in 5 minutes, an honest checkout and 100% of the ticket price — yours.',
      heroCta: 'Start selling',
      whyEyebrow: 'Organizer economics',
      whyTitle: "Don't give away 15% per ticket",
      whyGood: 'Taneesh · online you keep 100%',
      whySaveLabel: 'saved per ticket vs up to 15% box office',
      whySavePack: 'Savings on 100 tickets',
      currency: 'sum',
      convEyebrow: 'Transparency',
      convTitle: 'Conversion in real time',
      convRateLabel: 'Conversion',
      liveDesc: 'Showcase → payment — no sugarcoating.',
      liveViews: 'Views now',
      liveRangeWeek: 'This week',
      liveRangeMonth: 'This month',
      liveRangeAll: 'All time',
      livePays: 'Payments / hour',
      liveCheckout: 'To checkout',
      liveDrop: 'Cart abandoned',
      audTitle: 'Who it’s for',
      audEyebrow: 'Audience',
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
      feesFeeRow: 'Fee from guest',
      feesAcq: 'acquiring 1.5%',
      flowEyebrow: 'Launch',
      flowStepsTitle: 'How it works',
      flowStepsLead: 'Five steps — from cabinet to door scan.',
      flowTitle: 'Go live in 5 minutes',
      flowLead: 'From signup to door check-in — no box office, no subscription, no complex setup.',
      flowCta: 'Start selling',
      flow1t: 'Account',
      flow1d: 'Register an organizer account in a couple of minutes.',
      flow2t: 'Event',
      flow2d: 'Add the event description, ticket types, and prices.',
      flow3t: 'Showcase',
      flow3d: 'Publish the ready purchase link on socials or Telegram.',
      flow4t: 'Payment',
      flow4d: 'Guests buy tickets with Uzcard or Humo right from their phone.',
      flow5t: 'Guest check-in',
      flow5d: 'Scan ticket QR codes from your phone. Let guests in without queues or lists.',
      offerAria: 'Capabilities',
      o1tag: 'Showcase',
      o1t: 'Personal showcase',
      o1p: 'Event page and smart-link for ads and socials — in one place.',
      o2tag: 'Payment',
      o2t: 'Pay in 2 clicks',
      o2p: 'Guests pay in the browser — nothing to download.',
      o3tag: 'CRM',
      o3t: 'Guest CRM',
      o3p: 'Buyers, payment statuses, and contacts — all yours, with data export. Build your own LTV instead of handing data to the cash desk.',
      o4tag: 'Refund',
      o4t: '1-click refund',
      o4p: 'Cancel and refund tickets instantly — no long support threads.',
      o5tag: 'Invites',
      o5t: 'VIP invitations',
      o5p: 'Add special guests and partners to the list — free VIP tickets, no box office.',
      o6tag: 'Scanner',
      o6t: 'Fast, convenient scanner',
      o6p: 'Fast QR door control. Blocks fakes and double entries.',
      fpShowPublished: 'Published',
      fpShowMeta: '12 Apr · 20:00 · Tashkent',
      fpShowAtDoor: 'At door',
      fpShowFromTicket: 'from ticket',
      fpShowBuy: 'Buy ticket',
      fpShowViews: 'Views',
      fpShowClicks: 'Clicks',
      fpShowSmartLink: 'Smart link',
      fpShowCopied: 'Copied',
      fpPayReg: 'Registration',
      fpPayForWhom: 'Tickets for',
      fpPayPhone: 'Phone',
      fpPayMethod: 'Payment method',
      fpPayTicket: 'Ticket price',
      fpPayAcq: 'Acquiring 1.5%',
      fpPayFee: 'FixedFee per guest',
      fpPayGuestPays: 'Guest pays',
      fpPayCta: 'Pay 105 000',
      fpPayPaying: 'Paying…',
      fpPayPaid: 'Paid',
      fpPayTicketSent: 'Ticket already with guest',
      fpCrmSearch: 'Search by name, phone or email…',
      fpCrmExport: 'Export CSV',
      fpCrmGuest: 'Guest',
      fpCrmSum: 'Amount',
      fpCrmTickets: 'Tickets',
      fpCrmStatus: 'Status',
      fpCrmPaid: 'Paid',
      fpCrmToast: 'CSV downloaded',
      fpRefundOrder: 'Order #4821',
      fpRefundToRefund: 'Refund amount',
      fpRefundBtn: 'Refund ticket',
      fpRefundConfirmQ: 'Confirm refund?',
      fpRefundConfirm: 'Confirm',
      fpRefundPaid: 'Paid',
      fpRefundDone: 'Refunded',
      fpInviteAdd: '+ Invite',
      fpInviteInvited: 'Invited',
      fpInviteCheckedIn: 'Checked in',
      fpInviteGuest: 'Guest',
      fpScanOk: 'Guest let in',
      fpScanAlready: 'Already entered',
      fpScanEntry: 'Entry',
      fpScanDup: 'Duplicate QR',
      fpScanQrAlt: 'Ticket QR code https://taneesh.uz/t/NG-4821',
      faqTitle: 'Frequently asked questions',
      faqEyebrow: 'FAQ',
      nicheEyebrow: 'Event formats',
      nicheAria: 'Event formats',
      nicheTitle: 'Ticketing for any format',
      nicheLead: 'From standup to tournaments — one storefront, one checkout, one door scanner.',
      ttEyebrow: 'Ticket types',
      ttTitle: 'Sell entry the way your format needs',
      ttLead: 'One primary payment flow — plus three modes when you need another format.',
      ttOnlineTitle: 'Paid online',
      ttOnlineDesc: 'Guests pay on the storefront and get a QR instantly. You keep the full ticket price.',
      ttOnlineBadge: 'Online: 100% of the price — yours',
      ttDoorTitle: 'Pay at the door',
      ttDoorDesc: 'Guests reserve a spot ahead. They pay you the ticket price at the door.',
      ttDoorBadge: 'Cash at the door',
      ttFreeTitle: 'Free',
      ttFreeDesc: 'Registration with no payment. QR instantly — or after you approve.',
      ttFreeBadge: 'No payment',
      ttVipTitle: 'Invite',
      ttVipDesc: 'A private link for partners and VIPs. Scanner shows “Invited”.',
      ttVipBadge: 'Link only',
      ttOnlineWhen: 'Best for: concerts, stand-up, conferences, paid entry',
      ttDoorWhen: 'Best for: parties, open-air, when door payment matters',
      ttFreeWhen: 'Best for: talks, community, application-based entry',
      ttVipWhen: 'Best for: press, guests, team, partners',
      niche1: 'Stand-up shows',
      niche2: 'Business conferences',
      niche3: 'Concerts & shows',
      niche4: 'Sports tournaments',
      niche5: 'Workshops',
      niche6: 'Parties & nightlife',
      formatStream: [
        ['Stand-up', 'Conferences', 'Concerts', 'Sports', 'Workshops', 'Parties', 'Festivals', 'Networking', 'Open air', 'Quiz nights'],
        ['Yoga', 'Talks', 'Cinema', 'Exhibitions', 'Hackathons', 'Training', 'Gastro', 'Markets', 'Meetups', 'Tastings'],
        ['Karaoke', 'Forums', 'Theatre', 'Dance', 'Camps', 'Esports', 'Fashion', 'Meditation', 'Auctions', 'Stand-up battle'],
        ['Charity', 'Kids events', 'Corporate', 'DJ sets', 'Poetry slam', 'Photo days', 'VR shows', 'City tours', 'Wine tasting', 'Hack night'],
      ],
      quoteBadge: 'What organizers say',
      payEyebrow: 'Payments',
      ctaEyebrow: 'Start',
      ctaKp: 'Download proposal',
      ctaStat: 'of ticket price to you',
      footHeadline: 'Ticketing, showcase and CRM — for organizers',
      footPowered: 'Powered by',
      footGuestApp: 'Guest app',
      footCta: 'Apply',
      leadModalTitle: 'Get started',
      leadModalSubtitle: 'Leave your contact — we’ll call back and help you launch ticket sales.',
      leadPhoneLabel: 'Phone',
      leadPhonePlaceholder: '+998 90 123 45 67',
      leadNameLabel: 'Name',
      leadNamePlaceholder: 'How should we address you',
      leadDescLabel: 'About your event',
      leadDescPlaceholder: 'Format, date, city — anything helpful',
      leadSubmit: 'Submit request',
      leadClose: 'Close',
      leadSuccessTitle: 'Request sent',
      leadSuccessText: 'We’ll contact you shortly.',
      leadErrorText: 'Could not send. Try again or call us.',
      leadErrorConfig: 'Form temporarily unavailable. Call +998 88 034 87 97.',
      leadPhoneError: 'Enter a valid number, e.g. +998 90 123 45 67',
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
          a: 'Typical box offices take up to 15% per ticket. With Taneesh: 0% of your price on online sales; acquiring and FixedFee stay in the guest fee — not from your pocket.',
        },
        {
          q: 'Which payments are available and when is payout?',
          a: 'Currently available: Uzcard and Humo. Visa and Mastercard coming soon. Transactions are protected; funds reach organizers on a clear schedule.',
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
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && d.metaDescription) metaDesc.setAttribute('content', d.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', d.docTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && d.metaDescription) ogDesc.setAttribute('content', d.metaDescription);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', d.docTitle);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && d.metaDescription) twDesc.setAttribute('content', d.metaDescription);

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
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = d[key];
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });

    // FAQ questions + answers
    d.faq.forEach((item, i) => {
      const details = document.querySelector(`.faq-item[data-faq="${i}"]`);
      if (details) {
        const qText = details.querySelector('.faq-q-text');
        if (qText) qText.textContent = item.q;
      }
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
    if (typeof window.renderFormatStream === 'function') {
      window.renderFormatStream(d.formatStream);
    }
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
    testimonials: () => t().testimonials || [],
  };
})();
