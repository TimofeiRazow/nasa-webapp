document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded successfully');

    const translations = {
        'ru': {
            'functionality-title': 'Функциональность Orrary',
            'functionality-desc': 'Orrary — это интерактивное веб-приложение, отображающее небесные тела, такие как планеты, астероиды и кометы в визуально привлекательной форме.',
            'planetarium-title': 'Планетарий',
            'planetarium-desc': 'Наш планетарий информирует общественность о нашей Солнечной системе. Мы разрабатываем его таким образом, чтобы изобразить небесные тела в интерактивной и визуально привлекательной манере.',
            'dynamic-planetarium-title': 'Динамический планетарий',
            'dynamic-planetarium-desc': 'Наша команда разрабатывает динамический планетарий с использованием данных и кода NASA, работы с библиотеками кода 3D-графики, что делает его не только образовательным, но и увлекательным для пользователей.',
            'interactivity-title': 'Интерактивность',
            'interactivity-desc': 'Мы стремимся сделать наш планетарий максимально интерактивным, используя современные технологии и подходы к визуализации данных.',
            'history-title': 'История Orrary и орбит',
            'origin-title': 'Происхождение Orrary',
            'origin-desc': 'С 1713 года, когда Чарльзу Бойлю была представлена механическая модель солнечной системы, такие модели стали называть орбитами. Сегодня у нас есть доступ к виртуальным моделям, позволяющим изучать небесные тела в интерактивной манере.',
            'types-title': 'Типы небесных тел',
            'types-desc': 'Orrary отображает множество типов небесных тел, включая планеты, околоземные кометы (NEC), астероиды (NEA) и потенциально опасные астероиды (PHA), в совокупности называемые околоземными объектами (NEO).',
            'dynamic-model-title': 'Динамические модели',
            'dynamic-model-desc': 'Динамический Orrary анимирован, что позволяет отображать изменения в положении небесных тел с течением времени, создавая реалистичную модель движения небесных объектов.',
            'visualization-title': 'Визуализация Orrary',
            'visualization-desc': 'Orrary использует современные технологии для создания интерактивной и наглядной визуализации небесных тел. Мы стремимся показать величие Солнечной системы и околоземных объектов в доступной и увлекательной форме.',
            'footer-title': 'С уважением, команда ITshechka',
            'footer-desc': 'Все фотографии, тексты и видеоматериалы принадлежат их владельцам и использованы для демонстрации. Пожалуйста, не используйте контент шаблона в коммерческих целях.',
            'footer-link': 'Данные и ссылки'
        },
        'kz': {
            'functionality-title': 'Orrary функциялары',
            'functionality-desc': 'Orrary — ғаламшарлар, астероидтар және кометалар сияқты аспан денелерін визуалды тартымды түрде көрсететін интерактивті веб-қосымша.',
            'planetarium-title': 'Планетарий',
            'planetarium-desc': 'Біздің планетарий Күн жүйесі туралы ақпарат береді. Біз оны аспан денелерін интерактивті және визуалды тартымды түрде көрсету үшін жасап жатырмыз.',
            'dynamic-planetarium-title': 'Динамикалық планетарий',
            'dynamic-planetarium-desc': 'Біздің команда NASA деректерін пайдалана отырып, динамикалық планетарий жасап жатыр, бұл оны білім беру ғана емес, сонымен қатар пайдаланушылар үшін қызықты етеді.',
            'interactivity-title': 'Интерактивтілік',
            'interactivity-desc': 'Біз планетарийді заманауи технологиялар мен деректерді визуализациялау әдістерін қолданып, мүмкіндігінше интерактивті етуге тырысамыз.',
            'history-title': 'Orrary және орбиталардың тарихы',
            'origin-title': 'Orrary шығу тегі',
            'origin-desc': '1713 жылдан бастап Чарльз Бойльге Күн жүйесінің механикалық моделі ұсынылғаннан бастап, мұндай модельдер орбиталар деп атала бастады. Бүгін бізде аспан денелерін интерактивті түрде зерттеуге мүмкіндік беретін виртуалды модельдер бар.',
            'types-title': 'Аспан денелерінің түрлері',
            'types-desc': 'Orrary көптеген аспан денелерін көрсетеді, соның ішінде ғаламшарлар, жерге жақын кометалар (NEC), астероидтар (NEA) және әлеуетті қауіпті астероидтар (PHA), барлығы бірге жерге жақын объектілер (NEO) деп аталады.',
            'dynamic-model-title': 'Динамикалық модельдер',
            'dynamic-model-desc': 'Динамикалық Orrary анимацияланған, бұл аспан денелерінің уақыт бойынша орнын өзгертуін көрсетуге мүмкіндік береді, аспан объектілерінің қозғалысының шынайы моделін жасайды.',
            'visualization-title': 'Orrary визуализациясы',
            'visualization-desc': 'Orrary заманауи технологияларды қолданып, аспан денелерінің интерактивті және көрнекі визуализациясын жасайды. Біз Күн жүйесінің және жерге жақын объектілердің кереметін қолжетімді және қызықты түрде көрсетуді мақсат етеміз.',
            'footer-title': 'Құрметпен, ITshechka командасы',
            'footer-desc': 'Барлық фотосуреттер, мәтіндер және бейнематериалдар олардың иелеріне тиесілі және демонстрация үшін пайдаланылған. Шаблон мазмұнын коммерциялық мақсатта пайдаланбаңыз.',
            'footer-link': 'Деректер және сілтемелер'
        },
        'en': {
            'functionality-title': 'Orrary Functionality',
            'functionality-desc': 'Orrary is an interactive web application that displays celestial bodies such as planets, asteroids, and comets in a visually appealing form.',
            'planetarium-title': 'Planetarium',
            'planetarium-desc': 'Our planetarium informs the public about our Solar System. We are developing it in such a way as to depict celestial bodies in an interactive and visually appealing manner.',
            'dynamic-planetarium-title': 'Dynamic Planetarium',
            'dynamic-planetarium-desc': 'Our team is developing a dynamic planetarium using NASA data and 3D graphics code libraries, making it not only educational but also engaging for users.',
            'interactivity-title': 'Interactivity',
            'interactivity-desc': 'We strive to make our planetarium as interactive as possible using modern technologies and data visualization approaches.',
            'history-title': 'History of Orrary and Orbits',
            'origin-title': 'Origin of Orrary',
            'origin-desc': 'Since 1713, when Charles Boyle was presented with a mechanical model of the solar system, such models have been called orreries. Today, we have access to virtual models that allow us to study celestial bodies interactively.',
            'types-title': 'Types of Celestial Bodies',
            'types-desc': 'Orrary displays many types of celestial bodies, including planets, near-Earth comets (NEC), asteroids (NEA), and potentially hazardous asteroids (PHA), collectively known as near-Earth objects (NEO).',
            'dynamic-model-title': 'Dynamic Models',
            'dynamic-model-desc': 'The dynamic Orrary is animated, allowing us to display changes in the positions of celestial bodies over time, creating a realistic model of celestial object movement.',
            'visualization-title': 'Orrary Visualization',
            'visualization-desc': 'Orrary uses modern technologies to create an interactive and visual representation of celestial bodies. We strive to show the grandeur of the Solar System and near-Earth objects in an accessible and entertaining form.',
            'footer-title': 'Sincerely, ITshechka Team',
            'footer-desc': 'All photos, texts, and video materials belong to their owners and are used for demonstration purposes. Please do not use the template content for commercial purposes.',
            'footer-link': 'Data and Links'
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            element.textContent = translations[lang][key];
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