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
			our_day:"На сьогоднішній день український бізнес має турбулентні умови та велике навантаження: дефіцит кадрів, енергетична нестабільність, високі витрати на утримування генераторів і накопичуввачів енергії(УЗЕ). Тож нашою метою було створити  доступ до енергонезалежності для бізнесу з мінімальними затратами (CapEx, OpEx=0). Ми знайшли для бізнесу безпрецедентне вирішення проблеми з блекаутом в українській історії.",
			vitraty:"Чому для Вас забезпечені нульові капітальні та операційні витрати, і як ми це робимо?",
			dochid:"Наш основний дохід — це купівля та продаж електроенергії на біржі в періоди стабільного електропостачання, саме це покладає на LEMON BRIDGES CapEx та OpEx. При блекауті не можливо продати кВт в енергосистему, тож потенційним споживачем цієї електроенергії від(УЗЕ) може бути саме Ваш бізнес, утворюючи окрему від енергомережі замкнену енергосистему. Саме таке взаємовигідне співробітництво допоможе досягнути енергетичної стійкості та незалежності під час блекаутів.",
			
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
			uk_with_fn:"LEMON BRIDGES is a Ukrainian-Finnish venture supported by Finnish and international grants alongside concessional capital.",
			mission:"Our Mission: to build energy resilience and independence for Ukrainian businesses during scheduled and emergency grid outages.",
			our_day:"The Challenge for Ukrainian Business Ukrainian enterprises currently operate in high-risk conditions marked by workforce shortages, grid instability, and the steep operational costs of running conventional fuel generators. Our Solution: Zero CapEx, Zero OpEx. We deliver energy security directly to your facility with zero upfront capital expenditure and zero ongoing operational costs (CapEx = 0, OpEx = 0).",
			vitraty:"How We Fund It: During stable grid periods, LEMON BRIDGES generates revenue by trading electricity on the wholesale energy market (arbitrage). This commercial activity fully covers equipment acquisition, installation, and maintenance costs.",
			dochid:"How You Benefit: During grid failures, when power cannot be exported, the Battery Energy Storage System (BESS) automatically switches to power your facility, creating an isolated, independent microgrid. Why Domestic Competitors Cannot Match This Model We utilize cross-border corporate structure needed to unlock larger international concessionary capital. LEMON BRIDGES bridges this gap through its Finnish-Ukrainian structure, fulfilling the foreign-sponsor requirements demanded by international grant programs and institutional finance networks.",
			
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

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = 'Надсилання...';
  status.textContent = '';

  const formData = new FormData(form);

  try {
    const response = await fetch('send.php', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      status.style.color = '#4cd137';
      status.textContent = result.message;
      form.reset();
    } else {
      status.style.color = '#e84118';
      status.textContent = result.message;
    }
  } catch (error) {
    status.style.color = '#e84118';
    status.textContent = 'Помилка з\'єднання з сервером.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Надіслати';
  }
});
const messageTextarea = document.getElementById('message');

if (messageTextarea) {
  messageTextarea.addEventListener('input', function () {
    // Скидаємо висоту, щоб вона коректно зменшувалася при видаленні тексту
    this.style.height = 'auto';
    // Встановлюємо висоту відповідно до висоти контенту (scrollHeight)
    this.style.height = this.scrollHeight + 'px';
  });
}