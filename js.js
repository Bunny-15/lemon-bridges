document.addEventListener("DOMContentLoaded", () => {
    // 1. Логіка відкриття/закриття мобільного меню
    const btnMenu = document.getElementById("btn-menu");
    const mobileNav = document.getElementById("mobile-nav");

    if (btnMenu && mobileNav) {
        btnMenu.addEventListener("click", () => {
            btnMenu.classList.toggle("active");
            mobileNav.classList.toggle("active");
        });
    }

    // 2. Словник перекладів (виправлено кому між об'єктами)
    const translations = {
        ua: {
            hero_title: "ЕНЕРГЕТИЧНА СТІЙКІСТЬ ІЗ НУЛЬОВИМИ КАПЕКСАМИ ДЛЯ УКРАЇНСЬКИХ ПІДПРИЄМСТВ.",
            hero_desc: "Ми розгортаємо передові системи накопичення енергії (СНЕ) на базі акумуляторних батарей на вашому комерційному об'єкті з нульовими капітальними інвестиціями. Забезпечте негайне резервне живлення під час вимкнень електромережі.",
			home:"ГОЛОВНА",
			about_us:"ПРО НАС",
			services:"ПОСЛУГИ",
			connection:"ЗВ'ЯЗОК",
			decision:"РІШЕННЯ",
			offer:"Пропозиція для Вашого бізнесу",
			business:"Пропозиція для бізнесу (з бронюванням кВт)",
			company:"КОМПАНІЯ",
			contacts:"КОНТАКТИ",
			uk:"Україна, Волинська область",
			reserved:"© 2026 Lemon Bridges. Всі права захищено.",
			privacy_policy:"Політика конфіденційності",
			terms_of_use:"Умови використання (SLA)",
			uk_with_fn:"LEMON BRIDGES — це бізнес з українсько-фінською ініціативою",
			mission:"LEMON BRIDGES поставили мету: зробити Україну та український бізнес енергетично стійкими та незалежними під час планових та аварійних відключень електроенергії.",
			our_day:"На сьогоднішній день український бізнес має турбулентні умови та велике навантаження: дефіцит кадрів, енергетична нестабільність, високі витрати на утримування генераторів і накопичувачів енергії(УЗЕ). Тож нашою метою було створити  доступ до енергонезалежності для бізнесу з мінімальними затратами (CapEx, OpEx=0). Ми знайшли для бізнесу безпрецедентне вирішення проблеми з блекаутом в українській історії.",
			our_rishennia:"Наше рішення:",
			our_meta:"Наше рішення: нульові капітальні витрати, нульові операційні витрати. Ми забезпечуємо енергетичну безпеку безпосередньо на вашому об'єкті з нульовими початковими капітальними витратами та нульовими поточними експлуатаційними витратами (CapEx = 0, OpEx = 0). Наш основний дохід — це купівля та продаж електроенергії на біржі в періоди стабільного електропостачання. Саме цей дохід покладає на LEMON BRIDGES CapEx та OpEx.",
			vitraty:"Яка Ваша вигода:",
			dochid:"під час планових та аварійних  відключень у мережі, коли електроенергію неможливо експортувати, система акумуляторного накопичення енергії (BESS) автоматично перемикається на живлення вашого об'єкта, створюючи ізольовану, незалежну мікромережу.",
			schemapraci:"Тут наша схема співпраці із споживачами електроенергії від УЗЕ:",
			proponyjemo:"Ми пропонуємо відбір енергії під час планових відключень і прагнемо надавати послуги для забезпечення енергостійкості за найнижчою можливою ціною.",
			vyrishennia:"Це безпрецедентне вирішення проблеми з блекаутом в українській історії. І саме таке взаємовигідне співробітництво допоможе досягнути енергетичної стійкості та незалежності під час блекаутів.",
			propozycia1:"ПРОПОЗИЦІЯ 1",
			propozycia2:"ПРОПОЗИЦІЯ 2",
			free1:"Безкоштовна готовність до планових відключень",
			free2:"Преміум-захист від позапланових відключень",
			pokryvaje:"покриває прогнозовані дефіцити електроенергії шляхом синхронізації з графіками планових технічних робіт в енергетиці (80% Львівська обл. 2025р.)",
			techob:"технічне обслуговування: повністю керований процес Lemon Bridges",
			ryzyk:"ризик для активу нульовий(Гарантія продуктивна відповідно до SLA)",
			kapitalni:"Капітальні та операційні витрати(CapEx/OpEx) для бізнесу нульовий",
			our_opinion:"Наша думка",
			recomendujemo:"ми рекомендуємо українському бізнесу використовувати саме цю пропозицію 1, тому що це без будь-яких витрат для Вас",
			pokryvajepr:"покриває прогнозовані дефіцити електроенергії, шляхом синхронізації з графіками планових технічних робіт в енергомережі (80% Львівська обл. 2025р.)",
			techobsl:"технічне обслуговування: повністю керований процес Lemon Bridges",
			ryzykzys:"ризик для активунульовий(гарантія продуктивності відповідно до SLA)",
			kapital:"капітальні та операційні витрати(CapEx/OpEx) нульові",
			rezervacia:"резервація виділеного резерву кВт(до 80% ємності УЗЕ) для захисту від позапланових аварійних відключень",
			garantia:"гарантія того, що фіксована частина загальної потужності УЗЕ ніколи не використовується нами для щоденної ринкової торгівлі",
			biznez:"бізнесу необхідно прорахувати фінансово чи вигідно резервувати кВт для покриття незапланованих аварійних відключень(Львівська обл≈20% 2025) з допомогою нашого УЗЕ, чи з допомогою генератора",
			zvizokzez:"Зв'яжіться з нами",
			names:"Ваше ім'я",
			zvert:"як до вас звертатись?",
			nazva:"Назва компанії",
			email:"Ваш Email",
			phones:"Телефон",
			skilkykwtdozv:"Скільки кВт дозволена потужність на Вашому підприємстві/заводі?",
			skilkykwtdozvpotyz:"Скільки кВт з дозволеної потужності Ваше підприємство/завод споживає( максимальне пікове навантаження )?",
			povidomlennia:"Повідомлення",
			send:"Надіслати",
			varianty:"ВАРІАНТИ СПІВПРАЦІ З LEMON BRIDGES",
			
		},
        en: {
            hero_title: "ENERGY RESILIENCE WITH ZERO CAPEX FOR UKRAINIAN ENTERPRISES.",
            hero_desc: "We deploy advanced battery energy storage systems (BESS) at your commercial facility with zero capital investment. Ensure immediate backup power during grid outages.",
			home:"HOME",
			about_us:"ABOUT US",
			services:"SERVICES",
			connection:"CONNECTION",
			decision:"DECISION",
			offer:"Proposal for Your Business",
			business:"Business offer (with kW reservation)",
			company:"COMPANY",
			contacts:"CONTACTS",
			uk:"Ukraine, Volyn Oblast",
			reserved:"© 2026 Lemon Bridges. All rights reserved.",
			privacy_policy:"Privacy Policy",
			terms_of_use:"Terms of Use (SLA)",
			uk_with_fn:"LEMON BRIDGES is a business with a Ukrainian-Finnish initiative",
			mission:"LEMON BRIDGES set a goal: to make Ukraine and Ukrainian business energy-resilient and independent during planned and emergency power outages.",
			our_day:"Today, Ukrainian business has turbulent conditions and a high workload: staff shortage, energy instability, high costs of maintaining generators and energy storage facilities (ESP).",
			our_rishennia:"Our solution:",
			our_meta:"zero capital costs, zero operating costs. We provide energy security directly at your facility with zero initial capital costs and zero ongoing operating costs (CapEx = 0, OpEx = 0). Our main income is the purchase and sale of electricity on the exchange during periods of stable power supply. It is this income that LEMON BRIDGES charges CapEx and OpEx.",
			vitraty:"How you benefit:",
			dochid:"During planned and emergency grid outages, when electricity cannot be exported, the Battery Energy Storage System (BESS) automatically switches to power your facility, creating an isolated, independent microgrid.",
			schemapraci:"Here is our scheme of cooperation with electricity consumers from UZE:",
			proponyjemo:"We offer energy harvesting during planned outages and strive to provide services to ensure energy stability at the lowest possible price.",
			vyrishennia:"This is an unprecedented solution to the blackout problem in Ukrainian history. And it is this mutually beneficial cooperation that will help achieve energy stability and independence during blackouts.",
			propozycia1:"PROPOSAL 1",
			propozycia2:"PROPOSAL 2",
			free1:"​Free readiness for scheduled outages",
			free2:"​Premium protection against unscheduled outages",
			pokryvaje:"​covers projected electricity deficits by synchronizing with scheduled maintenance schedules in the power sector (80% Lviv region 2025)",
			techob:"​maintenance: fully managed process by Lemon Bridges",
			ryzyk:"​asset risk is zero (Productive guarantee in accordance with SLA)",
			kapitalni:"​CapEx/OpEx for business is zero",
			our_opinion:"​Our opinion:",
			recomendujemo:"​we recommend that Ukrainian business use specifically this proposal 1, because it comes without any costs for you",
			pokryvajepr:"​covers projected electricity deficits by synchronizing with scheduled maintenance schedules in the power grid (80% Lviv region 2025)",
			techobsl:"​maintenance: fully managed process by Lemon Bridges",
			ryzykzys:"​asset risk is zero (productivity guarantee in accordance with SLA)",
			kapital:"​CapEx/OpEx are zero",
			rezervacia:"​reservation of dedicated kW reserve (up to 80% of ESS capacity) for protection against unscheduled emergency outages",
			garantia:"​guarantee that a fixed portion of the total ESS capacity is never used by us for daily market trading",
			biznez:"​businesses need to financially calculate whether it is profitable to reserve kW to cover unscheduled emergency outages (Lviv region ≈20% 2025) using our ESS, or using a generator",
			zvizokzez:"Contact us",
			names:"Your name",
			zvert:"How should I address you?",
			nazva:"Company Name",
			email:"Your Email",
			phones:"Phone",
			skilkykwtdozv:"What is the allowed power capacity in kW at your enterprise/factory?",
			skilkykwtdozvpotyz:"How many kW of the permitted capacity does your enterprise/factory consume (maximum peak load)?",
			povidomlennia:"Message",
			send:"Send",
			varianty:"COOPERATION OPTIONS WITH LEMON BRIDGES",
			
		}
    };

    const btnUa = document.getElementById('btn-ua');
    const btnEn = document.getElementById('btn-en');

    // 3. Функція зміни мови
    function changeLanguage(lang) {
        // Виправлено: [data-i18n]
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (lang === 'ua') {
            btnUa.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnUa.classList.remove('active');
        }

        localStorage.setItem('preferred_language', lang);
    }

    if (btnUa && btnEn) {
        btnUa.addEventListener('click', () => changeLanguage('ua'));
        btnEn.addEventListener('click', () => changeLanguage('en'));
    }

    const savedLang = localStorage.getItem('preferred_language') || 'ua';
    changeLanguage(savedLang);

    // 4. Динамічний рік у футері
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});


 const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Надсилання...';
    status.textContent = '';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xbgjkgyo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' // Обов'язково для роботи Formspree через fetch!
        }
      });

      if (response.ok) {
        status.style.color = '#4cd137';
        status.textContent = 'Дякуємо! Ваше повідомлення успішно надіслано.';
        form.reset();
      } else {
        const result = await response.json();
        status.style.color = '#e84118';
        if (result.errors) {
          status.textContent = result.errors.map(err => err.message).join(', ');
        } else {
          status.textContent = 'Виникла помилка під час надсилання форми.';
        }
      }
    } catch (error) {
      status.style.color = '#e84118';
      status.textContent = 'Помилка з\'єднання з сервером.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Надіслати';
    }
  });
}





const messageTextarea = document.getElementById('message');

if (messageTextarea) {
  messageTextarea.addEventListener('input', function () {
    // Скидаємо висоту, щоб вона коректно зменшувалася при видаленні тексту
    this.style.height = 'auto';
    // Встановлюємо висоту відповідно до висоти контенту (scrollHeight)
    this.style.height = this.scrollHeight + 'px';
  });
}

