document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded successfully');

    window.addEventListener('scroll', function () {
        const featuresSection = document.querySelector('.features');
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > featuresSection.offsetTop) {
            featuresSection.classList.add('visible');
        }
    });

    const translations = {
        'ru': {
            'header': 'Orrary — около-земные объекты, угрозы для Земли и многое другое',
            'hero-p': 'Исследуйте планеты, астероиды и кометы. Получайте информацию о потенциально опасных небесных телах.',
            'features-title': 'Преимущества Orrary',
            'feature-1-title': 'Интерактивные 3D-модели',
            'feature-1-desc': 'Погрузитесь в захватывающий мир космоса с помощью интерактивных 3D-моделей.',
            'feature-2-title': 'Высококачественные изображения',
            'feature-2-desc': 'Насладитесь потрясающими высококачественными изображениями небесных тел.',
            'feature-3-title': 'Подробная информация',
            'feature-3-desc': 'Получите доступ к подробной информации о небесных телах, которая оживит Вселенную.',
            'about-title': 'Астрономия для всех',
            'about-desc': 'Откройте тайны космоса с нашим приложением! Узнайте о небесных телах и последних открытиях в области астрономии.',
            'discover-title': 'Откройте для себя Orrary',
            'discover-1-title': 'Функциональность',
            'discover-1-desc': 'Отображение различных небесных тел: планет, астероидов и комет.',
            'discover-2-title': 'Потенциально опасные астероиды',
            'discover-2-desc': 'Информация о потенциально опасных астероидах для любителей астрономии.',
            'discover-3-title': 'Звёздные отзывы',
            'discover-3-desc': 'Впечатления пользователей, которые уже оценили приложение.',
            'discover-4-title': 'Простота использования',
            'discover-4-desc': 'Удобный интерфейс для лёгкого доступа к информации о небесных телах.',
            'discover-5-title': 'Развитие интереса к астрономии',
            'discover-5-desc': 'Возможность узнать больше о космосе и небесных объектах.',
            'discover-6-title': 'Образовательный потенциал',
            'discover-6-desc': 'Приложение подходит как для развлечения, так и для обучения.',
            'reach-title': 'Дотянитесь до звёзд',
            'reach-desc': 'Узнайте больше о небесных телах с помощью нашего приложения Orrary.'
        },
        'kz': {
            'header': 'Orrary — жерсеріктер, Жерге қауіпті нысандар және тағы басқалар',
            'hero-p': 'Планеталарды, астероидтарды және кометаларды зерттеңіз. Жерге қауіпті болуы мүмкін аспан денелері туралы ақпарат алыңыз.',
            'features-title': 'Orrary артықшылықтары',
            'feature-1-title': 'Интерактивті 3D модельдер',
            'feature-1-desc': 'Ғарыштың қызықты әлеміне интерактивті 3D модельдер арқылы сүңгіңіз.',
            'feature-2-title': 'Жоғары сапалы суреттер',
            'feature-2-desc': 'Аспан денелерінің керемет жоғары сапалы суреттерінен ләззат алыңыз.',
            'feature-3-title': 'Толық ақпарат',
            'feature-3-desc': 'Аспан денелері туралы толық ақпаратқа қол жеткізіңіз.',
            'about-title': 'Барлық адамдарға арналған астрономия',
            'about-desc': 'Ғарыштың құпияларын ашыңыз! Аспан денелері мен астрономия саласындағы соңғы жаңалықтарды біліңіз.',
            'discover-title': 'Orrary-ді ашыңыз',
            'discover-1-title': 'Функционалдық',
            'discover-1-desc': 'Әртүрлі аспан денелерін: планеталар, астероидтар мен кометаларды көрсету.',
            'discover-2-title': 'Қауіпті астероидтар',
            'discover-2-desc': 'Астрономия әуесқойларына арналған қауіпті астероидтар туралы ақпарат.',
            'discover-3-title': 'Жұлдызды пікірлер',
            'discover-3-desc': 'Қолданушылардың Orrary туралы пікірлері.',
            'discover-4-title': 'Қолдану оңай',
            'discover-4-desc': 'Аспан денелері туралы ақпаратқа оңай қол жеткізу үшін ыңғайлы интерфейс.',
            'discover-5-title': 'Астрономияға қызығушылық',
            'discover-5-desc': 'Ғарыш және аспан объектілері туралы көбірек білу мүмкіндігі.',
            'discover-6-title': 'Оқу әлеуеті',
            'discover-6-desc': 'Бұл қосымша оқу үшін де, көңіл көтеру үшін де қолайлы.',
            'reach-title': 'Жұлдыздарға қол жеткізіңіз',
            'reach-desc': 'Orrary қосымшасы арқылы аспан денелері туралы көбірек біліңіз.'
        },
        'en': {
            'header': 'Orrary - Near-Earth Objects, Threats to Earth, and More',
            'hero-p': 'Explore planets, asteroids, and comets. Get information about potentially hazardous celestial bodies.',
            'features-title': 'Advantages of Orrary',
            'feature-1-title': 'Interactive 3D Models',
            'feature-1-desc': 'Immerse yourself in the fascinating world of space with interactive 3D models.',
            'feature-2-title': 'High-Quality Images',
            'feature-2-desc': 'Enjoy stunning high-quality images of celestial bodies.',
            'feature-3-title': 'Detailed Information',
            'feature-3-desc': 'Get access to detailed information about celestial bodies that brings the universe to life.',
            'about-title': 'Astronomy for Everyone',
            'about-desc': 'Discover the mysteries of space with our app! Learn about celestial bodies and the latest discoveries in astronomy.',
            'discover-title': 'Discover Orrary',
            'discover-1-title': 'Functionality',
            'discover-1-desc': 'Display various celestial bodies: planets, asteroids, and comets.',
            'discover-2-title': 'Potentially Hazardous Asteroids',
            'discover-2-desc': 'Information on potentially hazardous asteroids for astronomy enthusiasts.',
            'discover-3-title': 'Star Reviews',
            'discover-3-desc': 'User impressions who have already tried the app.',
            'discover-4-title': 'Ease of Use',
            'discover-4-desc': 'Convenient interface for easy access to information about celestial bodies.',
            'discover-5-title': 'Interest in Astronomy',
            'discover-5-desc': 'Opportunity to learn more about space and celestial objects.',
            'discover-6-title': 'Educational Potential',
            'discover-6-desc': 'The app is suitable for both entertainment and education.',
            'reach-title': 'Reach for the Stars',
            'reach-desc': 'Learn more about celestial bodies with our Orrary app.'
        }
    };

    function translatePage(lang) {
        document.querySelector('.hero-content h1').textContent = translations[lang]['header'];
        document.querySelector('.hero-content p').textContent = translations[lang]['hero-p'];
        document.querySelector('.features-container h2').textContent = translations[lang]['features-title'];
        const featureItems = document.querySelectorAll('.feature-item');
        featureItems[0].querySelector('h3').textContent = translations[lang]['feature-1-title'];
        featureItems[0].querySelector('p').textContent = translations[lang]['feature-1-desc'];
        featureItems[1].querySelector('h3').textContent = translations[lang]['feature-2-title'];
        featureItems[1].querySelector('p').textContent = translations[lang]['feature-2-desc'];
        featureItems[2].querySelector('h3').textContent = translations[lang]['feature-3-title'];
        featureItems[2].querySelector('p').textContent = translations[lang]['feature-3-desc'];
        document.querySelector('.about-content h2').textContent = translations[lang]['about-title'];
        document.querySelector('.about-content p').textContent = translations[lang]['about-desc'];
        document.querySelector('.discover-container h2').textContent = translations[lang]['discover-title'];
        const discoverItems = document.querySelectorAll('.discover-item');
        discoverItems[0].querySelector('h3').textContent = translations[lang]['discover-1-title'];
        discoverItems[0].querySelector('p').textContent = translations[lang]['discover-1-desc'];
        discoverItems[1].querySelector('h3').textContent = translations[lang]['discover-2-title'];
        discoverItems[1].querySelector('p').textContent = translations[lang]['discover-2-desc'];
        discoverItems[2].querySelector('h3').textContent = translations[lang]['discover-3-title'];
        discoverItems[2].querySelector('p').textContent = translations[lang]['discover-3-desc'];
        discoverItems[3].querySelector('h3').textContent = translations[lang]['discover-4-title'];
        discoverItems[3].querySelector('p').textContent = translations[lang]['discover-4-desc'];
        discoverItems[4].querySelector('h3').textContent = translations[lang]['discover-5-title'];
        discoverItems[4].querySelector('p').textContent = translations[lang]['discover-5-desc'];
        discoverItems[5].querySelector('h3').textContent = translations[lang]['discover-6-title'];
        discoverItems[5].querySelector('p').textContent = translations[lang]['discover-6-desc'];
        document.querySelector('.reach-container h2').textContent = translations[lang]['reach-title'];
        document.querySelector('.reach-container p').textContent = translations[lang]['reach-desc'];
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