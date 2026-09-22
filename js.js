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
			policy_conf:"ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ",
			who_we_are:"1. Хто ми",
			kontroler:"Контролер персональних даних: ТОВ «ЛЕМОН БРІДЖЕС» Адреса: Україна, Волинська обл., Луцький р-н., м. Горохів, вул. Столярчука Електронна пошта: info@lemon-bridges.com З усіх питань, що стосуються конфіденційності та захисту персональних даних, будь ласка, звертайтеся за вказаною електронною адресою.",
			vidpovidalna:"2. Відповідальна особа з питань захисту даних (DPO)",
			pryznacaly:"Ми не призначали відповідальну особу з питань захисту даних, оскільки це не є обов’язковим для нашої діяльності відповідно до статті 37 GDPR. З усіх питань щодо обробки персональних даних звертайтеся за адресою info@lemon-bridges.com",
			sphera:"3. Сфера застосування",
			this_policy_conf:"Ця Політика пояснює, як ми обробляємо персональні дані під час використання вами вебсайту  lemon-bridges.com Вона охоплює роботу вебсайту, форму зворотного зв’язку, інструменти безпеки (зокрема Google reCAPTCHA), функціональні файли cookie та механізми управління згодою.",
			dani_obr:"4. Дані, які ми обробляємо",
			contact_forms:"a)Дані з контактної форми. Ім’я, електронна пошта, зміст вашого повідомлення та будь-яка інша інформація, яку ви добровільно надаєте.",
			zberigannia:"b)Зберігання форм. Дані, надіслані через форми, зберігаються у базі даних WordPress за допомогою плагіна CFDB7.",
			dani_bezpeky:"c)Дані безпеки та технічні дані. IP-адреса та інші технічні дані можуть оброблятися з метою безпеки та забезпечення роботи сайту нашим хостингом, брандмауером Wordfence та сервісом Google reCAPTCHA (у разі його відображення).",
			my_navmysno:"d)Ми навмисно не збираємо спеціальні категорії персональних даних, визначені статтею 9 GDPR. Просимо не зазначати чутливу інформацію у полях довільного тексту.",
			my_zdij:"e)Ми не здійснюємо email-маркетинг та наразі не використовуємо аналітичні або рекламні технології.",
			dzerela_dannych:"5. Джерела отримання персональних даних",
			osnovy_dan:"Основну частину даних ми отримуємо безпосередньо від вас через контактну форму. Технічні дані (наприклад, IP-адреса) можуть надходити опосередковано з вашого пристрою або браузера під час користування сайтом чи проходження перевірок reCAPTCHA.",
			osnovy_dandit:"6. Дані дітей",
			nashi_poslugy:"Наші послуги не призначені для осіб віком до 16 років, і ми свідомо не збираємо їхні персональні дані. У разі виявлення таких даних вони будуть негайно видалені. Якщо для будь-якої обробки даних потрібна згода дитини, ми перевірятимемо наявність згоди батьків або законних представників.",
			meta_obrobky:"7. Мета обробки та правові підстави",
			vidpovidd:"a)Відповідь на ваш запит та переддоговірні дії — стаття 6(1)(b) GDPR.",
			contact_perfoments:"b)Виконання договору, виставлення рахунків та ведення обліку (за потреби) — статті 6(1)(b) та 6(1)(c) GDPR.",
			zabezpeczennia_bezpeky:"c)Забезпечення безпеки сайту та запобігання зловживанням із використанням Wordfence і reCAPTCHA — стаття 6(1)(f) GDPR.Наш законний інтерес полягає у захисті наших сервісів і користувачів. ",
			nash_osnovnyj:"d)Управління згодою щодо необов’язкових файлів cookie та подібних технологій — стаття 6(1)(a) GDPR (за наявності).",
			my_ne_vykorystovujemo:"e)Ми не використовуємо автоматизоване прийняття рішень, яке має юридичні або подібні значні наслідки для користувачів.",
			nadannia_persdan:"8. Надання персональних даних",
			nadannia_person_dannych:"Надання персональних даних через контактну форму є необхідним для відповіді на ваш запит (договірна вимога відповідно до статті 6(1)(b) GDPR).Якщо ви не надасте ці дані, ми не зможемо обробити ваш запит.",
			fail_cooks:"9. Файли cookie та подібні технології",
			fail_cookis:"Наразі ми використовуємо лише строго необхідні файли cookie. До них належать:",
			fail_cookines:"a)файли cookie згоди, встановлені нашим інструментом управління згодою; файли cookie безпеки, які використовуються reCAPTCHA та, у деяких випадках, WordPress або Wordfence",
			fail_cookinesin:"b)Детальніше див. у Політиці використання cookie. Ви можете змінити свої налаштування у будь-який час через банер cookie або посилання «Налаштування cookie» у футері сайту.",
			storonni_websites:"10. Сторонні вебсайти",
			nash_website:"Наш сайт може містити посилання на сторонні вебсайти, які ми не контролюємо. Практики обробки персональних даних на таких ресурсах регулюються їхніми власними політиками конфіденційності. Рекомендуємо ознайомлюватися з ними під час відвідування сторонніх сайтів.",
			rozkryttia_inf:"11. Розкриття інформації та обробники даних",
			rozkryttia_inf1:"Ми залучаємо постачальників послуг, які обробляють персональні дані за нашими інструкціями, зокрема:",
			rozkryttia_inf2:"a)провайдерів хостингу та технічного обслуговування вебсайту;",
			rozkryttia_inf3:"b)постачальника сервісів безпеки Wordfence;",
			rozkryttia_inf4:"c)зберігання даних форм за допомогою плагіна CFDB7 у нашій базі даних WordPress;",
			rozkryttia_inf5:"d)Google reCAPTCHA для запобігання автоматизованим запитам (ботам) у формах.",
			rozkryttia_inf6:"e)Ми не продаємо персональні дані. Передача даних органам державної влади здійснюється виключно у випадках, прямо передбачених законодавством.",
			miznarodna_peredacza:"12. Міжнародна передача даних",
			miznarodna_peredacza1:"Деякі постачальники можуть обробляти дані за межами Європейської економічної зони (ЄЕЗ). Наприклад, використання Google reCAPTCHA може передбачати з’єднання із серверами Google поза межами ЄЕЗ, що призводить до передачі вашої IP-адреси.У разі такої передачі ми застосовуємо належні гарантії, зокрема Стандартні договірні положення Європейської Комісії, а також додаткові заходи захисту, якщо це необхідно. У разі переходу на самостійне розміщення Google Fonts ми оновимо цей розділ.",
			stroky_zberigannia:"13. Строки зберігання даних",
			stroky_zberigannia1:"Дані з контактних форм (CFDB7): до 24 місяців після останньої взаємодії, якщо не укладено договір.",
			stroky_zberigannia2:"a)Журнали безпеки та серверні логи (включно з даними Wordfence): зазвичай до 90 днів, якщо більш тривале зберігання не потрібне для розслідування.",
			stroky_zberigannia3:"b)Договірні та бухгалтерські записи: зберігаються протягом строків, визначених законодавством та строками позовної давності, зазвичай до 10 років.",
			stroky_zberigannia4:"c)Строго необхідні файли cookie: зберігаються протягом їх індивідуального строку дії, зазначеного у Політиці використання cookie.",
			vashi_prava:"14. Ваші права",
			vashi_prava1:"Ви маєте право на доступ, виправлення, видалення, обмеження обробки, переносимість даних, а також заперечення проти обробки на підставі законних інтересів. Ви також маєте право відкликати надану згоду у будь-який час.Для реалізації своїх прав звертайтеся за адресою info@lemon-bridges.com . Ми надамо відповідь протягом одного місяця, безкоштовно, якщо запит не є надмірним або складним. Зверніть увагу: з метою забезпечення безпеки ваших персональних даних ми можемо запросити додаткову інформацію для підтвердження вашої особи перед обробкою запиту. Ви також маєте право подати скаргу до наглядового органу, зокрема до Державної служби України з питань захисту персональних даних.",
			browsers:"Деякі браузери підтримують сигнал Do Not Track. Наразі відсутній загальноприйнятий галузевий стандарт реагування на такі сигнали. Ми керуємо згодами та налаштуваннями користувачів через банер cookie та відповідні налаштування.",
			bezpeka:"16. Безпека",
			bezpeka1:"Ми застосовуємо технічні та організаційні заходи захисту, пропорційні рівню ризику. Доступ до даних обмежений, системи регулярно оновлюються та обслуговуються, а передача даних захищена. У випадках, передбачених законом, ми повідомлятимемо відповідні органи та користувачів про порушення безпеки персональних даних.",
			zminy:"17. Зміни",
			zminy1:"Ми можемо оновлювати цю Політику. Актуальна версія завжди доступна на цій сторінці.",
			umovy_vykorystania_SLA:"Умови використання",
			umovy_vykorystania_SLA1:"1. Угода та прийняття умов",
			umovy_vykorystania_SLA2:"Ці Умови користування регулюють доступ до вебсайту lemon-bridges.com та будь-яких пов’язаних сторінок, що містять посилання на ці Умови. Отримуючи доступ до сайту або користуючись ним, ви погоджуєтесь дотримуватися цих Умов. Якщо ви не погоджуєтесь із ними, ви не повинні користуватися сайтом. Ми можемо час від часу оновлювати ці Умови та публікувати оновлену редакцію на цій сторінці. Подальше користування сайтом означає прийняття оновлених Умов.",
			pro_nas:"2. Про нас",
			pro_nas1:"Сайт управляється компанією ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «ЛЕМОН БРІДЖЕС» Україна, Волинська область Контактна електронна пошта:info@lemon-bridges.com",
			pryznaczennia:"3. Призначення та характер інформації",
			pryznaczennia1:"Контент, розміщений на сайті, надається виключно з інформаційною метою щодо нашої діяльності та послуг. Він не є обов’язковою офертою, пропозицією, гарантією, професійною консультацією або запевненням того, що певна послуга відповідатиме вашим потребам. Будь-яка співпраця з нами регулюється окремим письмовим договором.",
			dozv_vykorystannia:"4. Дозволене використання",
			dozv_vykorystannia1:"Ви можете переглядати, друкувати та тимчасово зберігати розумні частини сайту виключно для особистого користування або внутрішніх бізнес-цілей. Забороняється:",
			dozv_vykorystannia2:"a) копіювати, відтворювати, повторно публікувати, публічно демонструвати або поширювати контент сайту, за винятком випадків, прямо дозволених чинним законодавством;",
			dozv_vykorystannia3:"b) змінювати, здійснювати зворотну інженерію, декомпілювати або намагатися отримати вихідний код будь-якої частини сайту;",
			dozv_vykorystannia4:"c) використовувати автоматизовані засоби доступу, збору або індексації даних сайту, включаючи краулери чи боти;",
			dozv_vykorystannia5:"d) впроваджувати віруси, шкідливе програмне забезпечення чи інший шкідливий код або втручатися в роботу сайту;",
			dozv_vykorystannia6:"e) використовувати сайт у спосіб, що порушує права третіх осіб або вимоги законодавства.",
			
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
			who_we_are:"1. Who We Are",
			policy_conf:"PRIVACY POLICY",
			kontroler:"Data Controller: LEMON BRIDGES LLC. Address: Ukraine, Volyn Region, Lutsk District, Horokhiv, Stoliarchuka St. Email: info@lemon-bridges.com. For all questions regarding privacy and personal data protection, please contact us at the specified email address.",
			vidpovidalna:"2. Data Protection Officer (DPO)",
			pryznacaly:" We have not appointed a Data Protection Officer, as it is not mandatory for our activities under Article 37 of the GDPR. For all inquiries regarding the processing of personal data, please contact info@lemon-bridges.com.",
			sphera:"3. Scope",
			this_policy_conf:"This Policy explains how we process personal data when you use the lemon-bridges.com website. It covers the operation of the website, the contact form, security tools (such as Google reCAPTCHA), functional cookies, and consent management mechanisms.",
			dani_obr:"4. Data We Process",
			contact_forms:"a) Contact form data: Name, email address, the content of your message, and any other information you voluntarily provide.",
			zberigannia:"b) Form storage: Data submitted through forms is stored in the WordPress database using the CFDB7 plugin.",
			dani_bezpeky:"c) Security and technical data: IP address and other technical data may be processed for security purposes and to ensure website functionality by our hosting provider, the Wordfence firewall, and the Google reCAPTCHA service (if displayed).",
			my_navmysno:"d) We do not intentionally collect special categories of personal data as defined by Article 9 of the GDPR. Please refrain from including sensitive information in free-text fields.",
			my_zdij:"e) We do not engage in email marketing and currently do not use analytical or advertising technologies.",
			dzerela_dannych:"5. Sources of Personal Data",
			osnovy_dan:" We obtain the majority of data directly from you via the contact form. Technical data (such as your IP address) may be received indirectly from your device or browser while you use the site or complete reCAPTCHA verifications.",
			osnovy_dandit:"6. Children's Data",
			nashi_poslugy:"Our services are not intended for individuals under the age of 16, and we do not knowingly collect their personal data. If such data is discovered, it will be promptly deleted. If consent is required for any data processing involving a child, we will verify the presence of parental or legal guardian consent.",
			meta_obrobky:"7. Purposes of Processing and Legal Bases",
			vidpovidd:"a) Responding to your request and pre-contractual steps — Article 6(1)(b) of the GDPR.",
			contact_perfoments:"b) Contract performance, invoicing, and bookkeeping (where applicable) — Articles 6(1)(b) and 6(1)(c) of the GDPR.",
			zabezpeczennia_bezpeky:"c) Ensuring website security and preventing abuse using Wordfence and reCAPTCHA — Article 6(1)(f) of the GDPR. Our legitimate interest is to protect our services and users.",
			nash_osnovnyj:"d) Managing consent for optional cookies and similar technologies — Article 6(1)(a) of the GDPR (where applicable).",
			my_ne_vykorystovujemo:"e) We do not use automated decision-making that produces legal or similarly significant effects on users.",
			nadannia_persdan:"8. Provision of Personal Data",
			nadannia_person_dannych:"Providing personal data through the contact form is necessary to respond to your request (a contractual requirement pursuant to Article 6(1)(b) of the GDPR). If you do not provide this data, we will not be able to process your request.",
			fail_cooks:"9. Cookies and Similar Technologies",
			fail_cookis:"Currently, we use only strictly necessary cookies. These include:",
			fail_cookines:"a) Consent cookies set by our consent management tool; security cookies used by reCAPTCHA and, in some cases, WordPress or Wordfence.",
			fail_cookinesin:' b) For more details, see our Cookie Policy.You can change your settings at any time via the cookie banner or the "Cookie Settings" link in the website footer.',
			storonni_websites:"10. Third-Party Websites",
			nash_website:"Our site may contain links to third-party websites that we do not control. Data processing practices on such resources are governed by their own privacy policies. We recommend reviewing them when visiting third-party sites.",
			rozkryttia_inf:"11. Disclosure of Information and Data Processors",
			rozkryttia_inf1:"We engage service providers who process personal data in accordance with our instructions, including:",
			rozkryttia_inf2:"a) Hosting and website technical maintenance providers;",
			rozkryttia_inf3:" b) The Wordfence security services provider;",
			rozkryttia_inf4:"c) Form data storage via the CFDB7 plugin within our WordPress database;",
			rozkryttia_inf5:"d) Google reCAPTCHA to prevent automated requests (bots) in forms.",
			rozkryttia_inf6:"e) We do not sell personal data. The transfer of data to public authorities is carried out solely in cases expressly provided for by law.",
			miznarodna_peredacza:"12. International Data Transfers",
			miznarodna_peredacza1:"Some providers may process data outside the European Economic Area (EEA). For example, the use of Google reCAPTCHA may involve connecting to Google servers outside the EEA, resulting in the transfer of your IP address. In the event of such a transfer, we apply appropriate safeguards, specifically the European Commission's Standard Contractual Clauses, as well as supplementary protection measures if necessary. If we transition to self-hosting Google Fonts, we will update this section.",
			stroky_zberigannia:"13. Data Retention Periods",
			stroky_zberigannia1:"Contact form data (CFDB7): Up to 24 months after the last interaction, unless a contract is concluded.",
			stroky_zberigannia2:"a) Security logs and server logs (including Wordfence data): Typically up to 90 days, unless a longer retention period is required for an investigation.",
			stroky_zberigannia3:"b) Contractual and accounting records: Retained for periods defined by legislation and limitation periods, typically up to 10 years.",
			stroky_zberigannia4:"c) Strictly necessary cookies: Retained for their individual validity periods specified in the Cookie Policy.",
			vashi_prava:"14. Your Rights",
			vashi_prava1:"You have the right of access, rectification, erasure, restriction of processing, data portability, and the right to object to processing based on legitimate interests. You also have the right to withdraw your given consent at any time. To exercise your rights, please contact info@lemon-bridges.com. We will respond within one month, free of charge, unless the request is excessive or complex. Please note: To ensure the security of your personal data, we may request additional information to verify your identity before processing the request. You also have the right to lodge a complaint with a supervisory authority, specifically the State Service of Ukraine for Personal Data Protection.",
			browsers:"Some browsers support a Do Not Track signal. Currently, there is no universally accepted industry standard for responding to such signals. We manage user consents and preferences via the cookie banner and corresponding settings.",
			bezpeka:"16. Security",
			bezpeka1:"We implement technical and organizational security measures proportional to the level of risk. Access to data is restricted, systems are regularly updated and maintained, and data transmission is secured. In cases provided by law, we will notify relevant authorities and users of personal data breaches.",
			zminy:"17. Changes",
			zminy1:"extérieures We may update this Policy. The current version is always available on this page.",
			umovy_vykorystania_SLA:"TERMS OF USE",
			umovy_vykorystania_SLA1:"1. Agreement and Acceptance of Terms",
			umovy_vykorystania_SLA2:"These Terms of Use govern access to the lemon-bridges.com website and any related pages referencing these Terms. By accessing or using the site, you agree to comply with these Terms. If you do not agree with them, you must not use the site. We may update these Terms from time to time by posting the revised version on this page. Continued use of the site constitutes acceptance of the updated Terms.",
			pro_nas:"2. About Us",
			pro_nas1:"The site is operated by LEMON BRIDGES LIMITED LIABILITY COMPANY, Ukraine, Volyn Region. Contact email: info@lemon-bridges.com.",
			pryznaczennia:"3. Purpose and Nature of Information",
			pryznaczennia1:"The content posted on the site is provided solely for informational purposes regarding our activities and services. It does not constitute a binding offer, proposal, warranty, professional advice, or assurance that a particular service will meet your needs. Any cooperation with us is governed by a separate written agreement.",
			dozv_vykorystannia:"4. Permitted Use",
			dozv_vykorystannia1:"You may view, print, and temporarily store reasonable portions of the site solely for personal use or internal business purposes. It is prohibited to:",
			dozv_vykorystannia2:"a) copy, reproduce, republish, publicly display, or distribute the site content, except as expressly permitted by applicable law;",
			dozv_vykorystannia3:"b) modify, reverse engineer, decompile, or attempt to extract the source code of any part of the site;",
			dozv_vykorystannia4:"c) use automated tools to access, scrape, or index site data, including crawlers or bots;",
			dozv_vykorystannia5:"d) introduce viruses, malicious software, or other harmful code, or interfere with the operation of the site;",
			dozv_vykorystannia6:"e) use the site in a manner that violates the rights of third parties or legal requirements.",
			
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

