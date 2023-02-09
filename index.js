// burger-menu
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click',()=> {
    nav.classList.toggle('menu-open');
});
// popup-menu
let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button)=> {
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',()=>{
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e)=>{
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme)
    });
});

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null) {
    applyTheme('light');
} else {
    applyTheme(activeTheme);
}
// lang
const langArr = {
    "new": {
        "ua": "Що нового",
        "en": "What's new",
        "ru": "Что нового",
    },
    "color": {
        "ua": "Колір",
        "en": "Color",
        "ru": "Цвет",
    },
    "order": {
        "ua": "Замовити",
        "en": "To order",
        "ru": "Заказать",
    },
    "title": {
        "ua": "Замов Iphone 14 pro",
        "en": "Order Iphone 14 pro",
        "ru": "Закажи Iphone 14 pro",
    },
    "message": {
        "ua": "Найближчим часом наш менеджер зв'яжеться з Вами",
        "en": "In the near future, our manager will contact you",
        "ru": "В ближайшее время наш менеджер свяжется с Вами",
    },
    "btn": {
        "ua": "ЗАМОВИТИ",
        "en": "TO ORDER",
        "ru": "ЗАКАЗАТЬ",
    },
    "button": {
        "ua": "ВИБРАТИ",
        "en": "CHOOSE",
        "ru": "ВЫБРАТЬ",
    },
    "news": {
        "ua": "Що нового",
        "en": "What's new",
        "ru": "Что нового",
    },
    "text__one": {
        "ua": "Всі моделі оснащені однокристальною системою A16 Bionic, 48-мегапіксельною основною камерою та екранами ProMotion із захистом Ceramic Shield та частотним діапазоном 1 – 120 Гц, а також прискореною пам'яттю LPDDR5. Дизайн лінійки оновлено, на фронтальній панелі смартфонів два вирізи.",
        "en": "All models are equipped with A16 Bionic single-chip system, 48-megapixel main camera and ProMotion screens with Ceramic Shield protection and a frequency range of 1 - 120 Hz, as well as accelerated LPDDR5 memory. The design of the line has been updated, there are two cutouts on the front panel of smartphones.",
        "ru": "Все модели оснащены однокристальной системой A16 Bionic,48-мегапиксельной основной камерой и   экранами ProMotion с защитой Ceramic Shield и частотным диапазоном 1 — 120 Гц, а также ускоренной памятью LPDDR5. Дизайн линейки обновлен, на фронтальной панели смартфонов два выреза.",
    },
    "text__two": {
        "ua": "Всі iPhone 14 в США будуть продаватися без лотка для SIM-карток: виробник заявляє, що покращена технологія eSIM дозволить перенести старі електронні сім-картки на нові смартфони.",
        "en": "All iPhone 14s in the US will be sold without a SIM tray: the manufacturer says that improved eSIM technology will allow you to transfer old electronic SIM cards to new smartphones.",
        "ru": "Все iPhone 14 в США будут продаваться без лотка для SIM-карт: производитель заявляет, что  улучшенная технология eSIM позволит перенести старые электронные сим-карты на новые смартфоны.",
    },
    "text__three": {
        "ua": "Оновлено фронтальну камеру (вона має автофокус і швидше розпізнає користувача в тумовах недостатнього освітлення) та сенсор основної камери.",
        "en": "Updated front camera (it is equipped with autofocus and faster recognizes user in low light conditions) and the main camera sensor.",
        "ru": "Обновлены фронтальная камера (она снабжена автофокусом и быстрее распознает пользователя в условиях недостаточной освещенности) и сенсор основной камеры.",
    },
    "text__four": {
        "ua": "iPhone 14 Pro вийшов у новому дизайні - без фірмової чубчика. Також у асортименті з'явився новий колір. У смартфоні, на відміну від «звичайних» 14-х айфонів, встановлений процесор A16 Bionic, який може за секунду здійснювати 4 трлн операцій із фото.",
        "en": "The iPhone 14 Pro came out in a new design - without the branded “bangs”. A new color has also been added to the range. The smartphone, unlike the 'regular' 14 iPhones, has an A16 Bionic processor, which can perform 4 trillion photo operations per second.",
        "ru": "iPhone 14 Pro вышел в новом дизайне — без фирменной «челки». Также в ассортименте появился новый цвет. В смартфоне, в отличие от «обычных» 14-х айфонов, установлен процессор A16 Bionic, который может за секунду производить 4 трлн операций с фото.",
    },
    "choise": {
        "ua": "ОБИРИ СВІЙ КОЛІР",
        "en": "CHOOSE YOUR COLOR",
        "ru": "ВЫБЕРИ СВОЙ ЦВЕТ",
    },
    "silver": {
        "ua": "Сріблястий",
        "en": "Silver",
        "ru": "Серебристый",
    },
    "purple": {
        "ua": "Темно фіолетовий",
        "en": "Dark purple",
        "ru": "Темно фиолетовый",
    },
    "gold": {
        "ua": "Золотий",
        "en": "gold",
        "ru": "Золотой",
    },
    "space__black": {
        "ua": "Космічний чорний",
        "en": "space black",
        "ru": "Космический черный",
    },
    "question": {
        "ua": "ХОЧЕШ IPHONE 14 PRO?",
        "en": "DO YOU WANT IPHONE 14 PRO?",
        "ru": "ХОЧЕШЬ IPHONE 14 PRO?",
    },
    "input": {
        "ua": "Ваше ім'я",
        "en": "Your name",
        "ru": "Ваше имя",
    },
    "message__second": {
        "ua": "Найближчим часом наш менеджер зв'яжеться з Вами",
        "en": "In the near future, our manager will contact you",
        "ru": "В ближайшее время наш менеджер свяжется с Вами",
    },
    "btn__second": {
        "ua": "ЗАМОВИТИ",
        "en": "TO ORDER",
        "ru": "ЗАКАЗАТЬ",
    },
    "politics": {
        "ua": "Політика конфіденційності",
        "en": "Privacy Policy",
        "ru": "Политика конфиденциальности",
    },
}

const select = document.querySelector('select');
const allLang = ['ua','en', 'ru'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.lng-new').innerHTML = langArr['new'][hash];
        for(let key in langArr) {
            let elem = document.querySelector('.lng-' + key);
            if(elem) {
                elem.innerHTML = langArr[key][hash];
            }
        
        }
}
changeLanguage();