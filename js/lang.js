/* массив с переводами */

const langArr = {
    'nav_li_link-home' : {
        'ru': 'главная страница',
        'en': 'Home',
    },
    'nav_li_link-cars': {
        'ru': 'машины',
        'en': 'cars',
    },
    'nav_li_link-books': {
        'ru': 'Бранирование',
        'en': 'Book now',
    },
    'nav_li_link-terms': {
        'ru': 'Условия',
        'en': 'Terms and Conditions',
    },
    'btn-Booking': {
        'ru': 'Забронировать',
        'en': 'Manage Booking',
    },
    'banner_h2': {
        'ru' : 'Лучшее в мире предложение по продаже автомобилей класса люкс',
        'en' : "The World's Best Luxury Car Deals",
    },
    'banner_p': {
        'ru' : 'HKinvestor может предоставить в аренду самые эксклюзивные автомобили, такие как Ferrari и Lamborghini.',
        'en' : 'HKinvestor can provide rentals of the most exclusive cars like Ferrari and Lamborghini.',
    },
    'banner-link': {
        'ru' : 'Купить',
        'en' : 'Buy Now',
    },
    'banner-btn_link' : {
        'ru' : 'Видео',
        'en' : 'Video Introduction',
    },
    "h2-rent" : {
        'ru' : 'аренда раскошных автомобилей',
        'en' : 'Rent a Luxury Car',
    },
    'rent-span-supercars' : {
        'ru' : 'Суперкары',
        'en' : 'Supercars',
    },
    'rent-span-sportcars' : {
        'ru' : 'Спорт-авто',
        'en' : 'Sportcars',
    },
    'rent-span-suv' : {
        'ru' : 'внедорожники',
        'en' : 'SUV',
    },
    'rent-span-supersuv' : {
        'ru' : 'спорт-внедорожники',
        'en' : 'Supersuv'
    },
    'rent__link-Supercars' : {
        'ru' : 'перейти',
        'en' : 'Discover'
    },
    'rent__link-Sportcars' : {
        'ru' : 'перейти',
        'en' : 'Discover'
    },
    'rent__link-SUV' : {
        'ru' : 'перейти',
        'en' : 'Discover'
    },
    'rent__link-Supersuv' : {
        'ru' : 'перейти',
        'en' : 'Discover'
    },
    'our-services-h2': {
        'ru' : 'другие наши сервисы',
        'en' : 'Our Other Service',
    },
    'services-h3-Private' : {
        'ru' : 'частный чартер',
        'en' : 'Private Charter',
    },
    'services-h3-Driven': {
        'ru' : 'Аренда автомобилей с шофером',
        'en' : 'Chauffer Driven Car Rentals',
    },
    'services-h3-Wedding' : {
        'ru' : 'Аренда свадебных автомобилей',
        'en' : 'Wedding Car Rentals',
    },
    'services-text-Private' : {
        'ru' : 'Pinjam Mobil Rent также предлагает вам незаметный и быстрый трансфер на вертолете.',
        'en' : 'Pinjam Mobil Rent also offers you discreet and speedy, transfers via helicopter or private planes.',
    },
    'services-text-Driven' : {
        'ru' : 'Наши водители — профессиональные водители, которые обеспечивают сдержанный, надежный, пунктуальный и профессиональный сервис.',
        'en' : 'Our chauffers are professional drivers who provide a discreet, reliable punctual and professional service.',
    },
    'services-text-Wedding' : {
        'ru' : 'Если вы хотите отпраздновать свою свадьбу стильно и элегантно, выберите один автомобиль из нашей роскошной коллекции.',
        'en' : 'If you want to celebrate your wedding in style and elegance, choose one car from our luxury collection.',
    },
    'car-rentals-h2' : {
        'ru' : 'популярные места для аренды автомобилей',
        'en' : 'Popular Destination for Car Rentals',
    },
    'rentals-h3-London' : {
        'ru' : 'Лондон',
        'en' : 'London',
    },
    'rentals-text-London' :{
        'ru' : 'Аренда автомобилей в 75 пунктах выдачи',
        'en' : 'Car hire in 75 pick-up locations',
    },
    'rentals-price-London' : {
        'ru' : 'От $ 669,00 в сутки',
        'en' : 'From $ 669,00 per day',
    },
    'rentals-link-London' : {
        'ru' : 'Искать автомобили в аренду в Лондоне',
        'en' : 'Search rental cars in London',
    },
    'rentals-h3-Madrid' : {
        'ru' : 'Мадрид',
        'en' : 'Madrid',
    },
    'rentals-text-Madrid' : {
        'ru' : 'Аренда автомобилей в 75 пунктах выдачи',
        'en' : 'Car hire in 75 pick-up locations',
    },
    'rentals-price-Madrid' : {
        'ru' : 'От $ 799,00 в сутки',
        'en' : 'From $ 799,00 per day',
    },
    'rentals-link-Madrid' : {
        'ru' : 'Искать автомобили в аренду в Мадриде',
        'en' : 'Search rental cars in Madrid',
    },
    'rentals-h3-Paris' : {
        'ru' : 'Париж',
        'en' : 'Paris',
    },
    'rentals-text-Paris' : {
        'ru' : 'Аренда автомобилей в 75 пунктах выдачи',
        'en' : 'Car hire in 75 pick-up locations',
    },
    'rentals-price-Paris' : {
        'ru' : 'От $ 899,00 в сутки',
        'en' : 'From $ 899,00 per day',
    },
    'rentals-link-Paris' : {
        'ru' : 'Искать автомобили в аренду в Париже',
        'en' : 'Search rental cars in Paris',
    },
    'rentals-h3-Dubai' : {
        'ru' : 'Дубай',
        'en' : 'Dubai',
    },
    'rentals-text-Dubai' : {
        'ru' : 'Аренда автомобилей в 75 пунктах выдачи',
        'en' : 'Car hire in 75 pick-up locations',
    },
    'rentals-price-Dubai' : {
        'ru' : 'От $ 669,00 в сутки',
        'en' : 'From $ 669,00 per day',
    },
    'rentals-link-Dubai' : {
        'ru' : 'Искать автомобили в аренду в Дубае',
        'en' : 'Search rental cars in Dubai',
    },
    'rentals-h3-Roma' : {
        'ru' : 'Рим',
        'en' : 'Roma',
    },
    'rentals-text-Roma' : {
        'ru' : 'Аренда автомобилей в 75 пунктах выдачи',
        'en' : 'Car hire in 75 pick-up locations',
    },
    'rentals-price-Roma' : {
        'ru' : 'От $ 799,00 в сутки',
        'en' : 'From $ 799,00 per day',
    },
    'rentals-link-Roma' : {
        'ru' : 'Искать автомобили в аренду в Риме',
        'en' : 'Search rental cars in Roma',
    },
    'rentals-h3-Jakarta' : {
        'ru' : 'Джакарта',
        'en' : 'Jakarta',
    },
    'rentals-text-Jakarta' : {
        'ru' : 'Аренда автомобилей в 75 пунктах выдачи',
        'en' : 'Car hire in 75 pick-up locations',
    },
    'rentals-price-Jakarta' : {
        'ru' : 'От $ 899,00 в сутки',
        'en' : 'From $ 899,00 per day',
    },
    'rentals-link-Jakarta' : {
        'ru' : 'Искать автомобили в аренду в Джакарте',
        'en' : 'Search rental cars in Jakarta',
    },
    'location-section-h2' : {
        'ru' : 'Расположение',
        'en' : 'Location',
    },
    'footer-about__text' : {
        'ru' : 'Лучшая в мире дилинговая платформа для роскошных автомобилей',
        'en' : "The World's Best Luxury Car’s Dealing Platform",
    },
    'footer-nav__header-company' : {
        'ru' : 'Компания',
        'en' : 'Company',
    },
    'footer-nav__header-support' : {
        'ru' : 'Поддержка',
        'en' : 'Support',
    },
    'footer-nav__header-Category' : {
        'ru' : 'Категория',
        'en' : 'Category',
    },
    'footer-nav__link-about' : {
        'ru' : 'О нас',
        'en' : 'About Us',
    },
    'footer-nav__link-product' : {
        'ru' : 'Продукт',
        'en' : 'Product',
    },
    'footer-nav__link-Testimonial' : {
        'ru' : 'Отзывы',
        'en' : 'Testimonial',
    },
    'footer-nav__link-FAQ' : {
        'ru' : 'Часто задаваемые вопросы',
        'en' : 'FAQ',
    },
    'footer-nav__link-Privacy' : {
        'ru' : 'политика конфиденциальности',
        'en' : 'Privacy Policy',
    },
    'footer-nav__link-terms' : {
        'ru' : 'Условия предоставления услуг',
        'en' : 'Terms of Services',
    },
    'footer-nav__link-super' : {
        'ru' : 'суперкары',
        'en' : 'Super Cars',
    },
    'footer-nav__link-sport' : {
        'ru' : 'спорткары',
        'en' : 'Sport Cars',
    },
    'footer-nav__link-more' : {
        'ru' : 'Больше автомобилей',
        'en' : 'More Cars',
    },
    'footer-copyright-text' : {
        'ru' : '© 2022 HKInvestor. Все права защищены',
        'en' : '©2022 HKInvestor. All right reserved',
    },
}
