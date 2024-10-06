document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded successfully');

    const translations = {
        'ru': {
            'logo': 'Orrary',
            'navbar-home': 'На главную',
            'navbar-functions': 'Функции',
            'learn-more': 'Узнать больше',
            'about-title': 'О приложении Orrary',
            'about-desc-1': 'С тех пор как в 1713 году Чарльзу Бойлу, 4-му графу Оррери, была представлена ​​механическая модель солнечной системы, такие модели стали называться планетариями. Первые планетарии были физическими моделями, но сегодня мы можем использовать многочисленные инструменты для создания виртуальных планетариев, которые имеют гораздо больше функций, чем их древние механические аналоги.',
            'about-desc-2': 'Orrary — это интерактивное веб-приложение планетарий, встроенное в веб-страницу и отображающее небесные тела, такие как планеты, околоземные астероиды, околоземные кометы и потенциально опасные астероиды.',
            'development-time': 'Время разработки',
            'team': 'Команда разработчиков',
            'team-member-1': 'Пинигин Артём — занимался дизайном сайта и писал весь Front-end для кейса на чистых HTML, CSS и JS.',
            'team-member-2': 'Ефремов Иван — занимался написанием функции Кеплера и созданием 3D-рендера с помощью Three.js.',
            'team-member-3': 'Разов Тимофей — сделал Back-end на Java Spring.',
            'footer-title': 'С уважением, команда ITshechka',
            'footer-desc': 'Все фотографии, тексты и видеоматериалы принадлежат их владельцам и использованы для демонстрации. Пожалуйста, не используйте контент шаблона в коммерческих целях.',
            'footer-link': 'Данные и ссылки'
        },
        'kz': {
            'logo': 'Orrary',
            'navbar-home': 'Басты бетке',
            'navbar-functions': 'Функциялар',
            'learn-more': 'Көбірек білу',
            'about-title': 'Orrary туралы',
            'about-desc-1': '1713 жылы Чарльз Бойлға, Оррери графына, Күн жүйесінің механикалық моделі ұсынылғаннан бері, мұндай модельдер планетарийлер деп атала бастады. Алғашқы планетарийлер физикалық модельдер болды, бірақ бүгінгі күні бізде виртуалды планетарийлерді жасауға көптеген құралдар бар, олар ежелгі механикалық аналогтарынан әлдеқайда көп функцияларға ие.',
            'about-desc-2': 'Orrary — бұл веб-параққа кіріктірілген және ғаламшарлар, Жерге жақын астероидтар, кометалар және әлеуетті қауіпті астероидтарды көрсететін интерактивті веб-планетарий.',
            'development-time': 'Даму уақыты',
            'team': 'Әзірлеушілер командасы',
            'team-member-1': 'Пинигин Артём — сайт дизайнын жасады және таза HTML, CSS және JS арқылы Front-end жазды.',
            'team-member-2': 'Ефремов Иван — Кеплер функциясын жазумен және Three.js көмегімен 3D-рендер жасаумен айналысты.',
            'team-member-3': 'Разов Тимофей — Java Spring-де Back-end жасады.',
            'footer-title': 'Құрметпен, ITshechka командасы',
            'footer-desc': 'Барлық фотосуреттер, мәтіндер және бейнематериалдар олардың иелеріне тиесілі және демонстрация үшін пайдаланылған. Шаблон мазмұнын коммерциялық мақсатта пайдаланбаңыз.',
            'footer-link': 'Деректер және сілтемелер'
        },
        'en': {
            'logo': 'Orrary',
            'navbar-home': 'Home',
            'navbar-functions': 'Functions',
            'learn-more': 'Learn more',
            'about-title': 'About Orrary',
            'about-desc-1': 'Since 1713, when Charles Boyle, the 4th Earl of Orrery, was presented with a mechanical model of the solar system, such models have been called orreries. The first orreries were physical models, but today we can use numerous tools to create virtual orreries that have far more features than their ancient mechanical counterparts.',
            'about-desc-2': 'Orrary is an interactive web application orrery embedded in a web page that displays celestial bodies such as planets, near-Earth asteroids, near-Earth comets, and potentially hazardous asteroids.',
            'development-time': 'Development Time',
            'team': 'Development Team',
            'team-member-1': 'Pinigin Artem — worked on website design and wrote all the front-end for the case using pure HTML, CSS, and JS.',
            'team-member-2': 'Efremov Ivan — worked on writing the Kepler function and creating the 3D render using Three.js.',
            'team-member-3': 'Razov Timofey — implemented the back-end using Java Spring.',
            'footer-title': 'Sincerely, ITshechka Team',
            'footer-desc': 'All photos, texts, and video materials belong to their owners and are used for demonstration purposes. Please do not use the template content for commercial purposes.',
            'footer-link': 'Data and Links'
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    document.getElementById('lang-ru').addEventListener('click', function () {
        translatePage('ru');
    });
    document.getElementById('lang-kz').addEventListener('click', function () {
        translatePage('kz');
    });
    document.getElementById('lang-en').addEventListener('click', function () {
        translatePage('en');
    });
});