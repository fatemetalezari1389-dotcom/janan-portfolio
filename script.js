// =====================================
// 1. LANGUAGE SYSTEM
// =====================================

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navJourney: "Journey",
    navContact: "Contact",
    navCta: "Let's talk",

    eyebrow: "THINK · CREATE · INNOVATE",
    heroKicker: "Hello, I'm Janan Talezari",
    heroTitle: 'Building digital<br><span>experiences</span><br>through code.',
    heroDescription:
      "A curious programmer exploring web development, software and AI — turning ideas into useful digital experiences.",
    heroWork: "Explore my work",
    heroAbout: "A little about me",
    heroStatus: "Currently learning, building and improving.",
    chipCreative: "Creative thinking",
    chipCode: "Code with purpose",
    scroll: "SCROLL TO EXPLORE",

    aboutLabel: "ABOUT ME",
    aboutTitle: 'Curiosity is where<br><span>everything starts.</span>',
    avatarRole: "PROGRAMMER · CREATIVE LEARNER",
    based: "Digital world",
    aboutLead:
      "I'm a student and aspiring developer who enjoys understanding how things work — then building something of my own.",
    aboutP1:
      "My journey started with Python. Since then, I've been exploring web development, artificial intelligence and the creative side of technology.",
    aboutP2:
      "I learn best by making real projects, testing ideas and improving them step by step. I'm focused on building a strong foundation and creating work that is genuinely useful.",
    focus1: "Software development",
    focus2: "Web experiences",
    focus3: "Artificial intelligence",

    skillsLabel: "SKILLS & TOOLS",
    skillsTitle: 'Learning today.<br><span>Building tomorrow.</span>',
    skillsIntro:
      "A transparent look at the tools and areas I'm exploring.",
    skillProgramming: "Programming",
    skillProgrammingDesc:
      "Building logic, problem-solving skills and applications.",
    skillWeb: "Web development",
    skillWebDesc:
      "Learning to create responsive and accessible websites.",
    skillAI: "AI & creative tools",
    skillAIDesc:
      "Using modern tools to research, learn and prototype ideas.",
    skillDesign: "Design",
    skillDesignDesc:
      "Exploring visual communication and user-centered design.",
    skillsNote:
      "Skills grow through practice — this page grows with them.",

    projectsLabel: "SELECTED PROJECTS",
    projectsTitle: 'Ideas in progress.<br><span>Made with intention.</span>',
    projectsIntro:
      "A few things I'm building or planning to build. More will be added as they become ready.",
    statusProgress: "In development",
    statusPlanned: "Planned",
    planDesc:
      "A personal productivity app concept for organizing tasks, notes and goals in one focused workspace.",
    planNote: "Currently building · Case study coming later",
    studyTitle: "AI Study Assistant",
    studyDesc:
      "An idea for a study assistant that organizes learning sessions and educational resources.",
    storeTitle: "E-commerce Platform",
    storeDesc:
      "A concept for a simple online store with product pages and a smooth shopping experience.",

    journeyLabel: "MY JOURNEY",
    journeyTitle: 'Small steps.<br><span>Real progress.</span>',
    journey1Title: "Python fundamentals",
    journey1Desc:
      "Strengthening programming foundations and practicing with small projects.",
    journey2Title: "Web development",
    journey2Desc:
      "Learning HTML, CSS and JavaScript by building real interfaces.",
    journey3Title: "Artificial intelligence",
    journey3Desc:
      "Exploring AI concepts and learning to use modern tools thoughtfully.",
    journeyCurrent: "Currently learning",
    journeyExploring: "Exploring",

    contactLabel: "GET IN TOUCH",
    contactTitle: 'Have an idea?<br><span>Let\'s connect.</span>',
    contactIntro:
      "I'm open to meaningful conversations, learning opportunities and creative collaborations.",
    privacyNote:
      "Your contact details are visible to everyone visiting this public website.",
    formTitle: "Send a message",
    formIntro: "Tell me a little about what's on your mind.",
    formName: "Your name",
    formEmail: "Email address",
    formSubject: "Subject",
    formMessage: "Message",
    sendButton: "Send message",
    sending: "Sending...",
    successMessage: "Your message was sent successfully!",
    errorMessage:
      "Something went wrong. Please try again or contact me by email.",

    footerText: "Designed with curiosity. Built with code."
  },

  fa: {
    navHome: "خانه",
    navAbout: "درباره من",
    navSkills: "مهارت‌ها",
    navProjects: "پروژه‌ها",
    navJourney: "مسیر من",
    navContact: "ارتباط",
    navCta: "ارتباط با من",

    eyebrow: "فکر کن · خلق کن · نوآوری کن",
    heroKicker: "سلام، من جانان طالع زاری هستم",
    heroTitle: 'ساخت تجربه‌های<br><span>دیجیتال</span><br>با کمک کدنویسی.',
    heroDescription:
      "برنامه‌نویجی کنجکاو که در دنیای طراحی وب، نرم‌افزار و هوش مصنوعی قدم می‌زند و ایده‌ها را به تجربه‌های دیجیتال کاربردی تبدیل می‌کند.",
    heroWork: "مشاهده پروژه‌ها",
    heroAbout: "کمی درباره من",
    heroStatus: "در حال یادگیری، ساختن و پیشرفت.",
    chipCreative: "تفکر خلاقانه",
    chipCode: "کدنویسی هدفمند",
    scroll: "برای کشف بیشتر اسکرول کنید",

    aboutLabel: "درباره من",
    aboutTitle: 'کنجکاوی جایی است که<br><span>همه‌چیز شروع می‌شود.</span>',
    avatarRole: "برنامه‌نویس · یادگیرنده خلاق",
    based: "دنیای دیجیتال",
    aboutLead:
      "من دانش‌آموز و توسعه‌دهنده‌ای در مسیر یادگیری هستم که از فهمیدن نحوه کارکرد چیزها و ساختن ایده‌های خودش لذت می‌برد.",
    aboutP1:
      "مسیر من با پایتون شروع شد. از آن زمان، طراحی وب، هوش مصنوعی و جنبه خلاقانه فناوری را دنبال کرده‌ام.",
    aboutP2:
      "بهترین روش یادگیری برای من ساخت پروژه‌های واقعی، آزمایش ایده‌ها و بهتر کردن آن‌ها قدم‌به‌قدم است. تمرکزم روی ساختن پایه‌ای قوی و خلق کارهایی واقعاً کاربردی است.",
    focus1: "توسعه نرم‌افزار",
    focus2: "تجربه‌های وب",
    focus3: "هوش مصنوعی",

    skillsLabel: "مهارت‌ها و ابزارها",
    skillsTitle: 'امروز یاد می‌گیرم.<br><span>برای فردا می‌سازم.</span>',
    skillsIntro:
      "نگاهی شفاف به ابزارها و زمینه‌هایی که در حال یادگیری آن‌ها هستم.",
    skillProgramming: "برنامه‌نویسی",
    skillProgrammingDesc:
      "تقویت منطق، مهارت حل مسئله و ساخت برنامه‌ها.",
    skillWeb: "توسعه وب",
    skillWebDesc:
      "یادگیری ساخت وب‌سایت‌های واکنش‌گرا و کاربردی.",
    skillAI: "هوش مصنوعی و ابزارهای خلاقانه",
    skillAIDesc:
      "استفاده از ابزارهای جدید برای تحقیق، یادگیری و آزمایش ایده‌ها.",
    skillDesign: "طراحی",
    skillDesignDesc:
      "آشنایی با ارتباط بصری و طراحی کاربرمحور.",
    skillsNote:
      "مهارت‌ها با تمرین رشد می‌کنند؛ این صفحه هم همراه آن‌ها پیشرفت می‌کند.",

    projectsLabel: "پروژه‌های منتخب",
    projectsTitle: 'ایده‌هایی در حال شکل‌گیری.<br><span>با هدف ساخته‌شده.</span>',
    projectsIntro:
      "چند پروژه که در حال ساخت یا برنامه‌ریزی برای ساخت آن‌ها هستم. با آماده شدن پروژه‌های جدید، آن‌ها را اضافه می‌کنم.",
    statusProgress: "در حال توسعه",
    statusPlanned: "برنامه‌ریزی‌شده",
    planDesc:
      "ایده یک اپلیکیشن مدیریت شخصی برای سازمان‌دهی وظایف، یادداشت‌ها و اهداف در یک فضای متمرکز.",
    planNote: "در حال توسعه · مطالعه موردی در آینده",
    studyTitle: "دستیار مطالعه هوشمند",
    studyDesc:
      "ایده‌ای برای یک دستیار مطالعه که جلسات یادگیری و منابع آموزشی را سازمان‌دهی می‌کند.",
    storeTitle: "پلتفرم فروشگاه اینترنتی",
    storeDesc:
      "ایده یک فروشگاه آنلاین ساده با صفحات محصولات و تجربه خرید روان.",

    journeyLabel: "مسیر من",
    journeyTitle: 'قدم‌های کوچک.<br><span>پیشرفت واقعی.</span>',
    journey1Title: "مبانی پایتون",
    journey1Desc:
      "تقویت پایه‌های برنامه‌نویسی و تمرین با پروژه‌های کوچک.",
    journey2Title: "توسعه وب",
    journey2Desc:
      "یادگیری HTML، CSS و JavaScript با ساخت رابط‌های واقعی.",
    journey3Title: "هوش مصنوعی",
    journey3Desc:
      "آشنایی با مفاهیم هوش مصنوعی و یادگیری استفاده آگاهانه از ابزارهای جدید.",
    journeyCurrent: "در حال یادگیری",
    journeyExploring: "در حال بررسی",

    contactLabel: "ارتباط با من",
    contactTitle: 'ایده‌ای داری؟<br><span>با هم در ارتباط باشیم.</span>',
    contactIntro:
      "از گفتگوهای مفید، فرصت‌های یادگیری و همکاری‌های خلاقانه استقبال می‌کنم.",
    privacyNote:
      "اطلاعات تماس شما در این سایت عمومی برای تمام بازدیدکنندگان قابل مشاهده است.",
    formTitle: "ارسال پیام",
    formIntro: "کمی درباره موضوعی که در ذهن داری بنویس.",
    formName: "نام شما",
    formEmail: "آدرس ایمیل",
    formSubject: "موضوع",
    formMessage: "پیام",
    sendButton: "ارسال پیام",
    sending: "در حال ارسال...",
    successMessage: "پیام شما با موفقیت ارسال شد!",
    errorMessage:
      "مشکلی پیش آمد. دوباره تلاش کنید یا از طریق ایمیل ارتباط بگیرید.",

    footerText: "با کنجکاوی طراحی شده؛ با کدنویسی ساخته شده."
  }
};


// =====================================
// 2. LANGUAGE SWITCHING
// =====================================

const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
  const selectedLanguage = translations[language];

  if (!selectedLanguage) return;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.body.dir = language === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (selectedLanguage[key]) {
      element.innerHTML = selectedLanguage[key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "fa" ? "EN" : "فا";
  }

  document.title =
    language === "fa"
      ? "جانان طالع زاری | نمونه‌کار"
      : "Janan Talezari | Portfolio";

  localStorage.setItem("portfolio-language", language);
}

const savedLanguage = localStorage.getItem("portfolio-language") || "en";

setLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang;
    const nextLanguage = currentLanguage === "en" ? "fa" : "en";

    setLanguage(nextLanguage);
  });
}


// =====================================
// 3. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


// =====================================
// 4. BACK TO TOP BUTTON
// =====================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTop) return;

  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// =====================================
// 5. FOOTER YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =====================================
// 6. CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );

    const language = document.documentElement.lang || "en";
    const messages = translations[language];

    const originalButtonText = messages.sendButton;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.querySelector("[data-i18n]").textContent =
        messages.sending;
    }

    if (formStatus) {
      formStatus.textContent = "";
    }

    try {
      const formData = new FormData(contactForm);

      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        if (formStatus) {
          formStatus.textContent = messages.successMessage;
        }

        contactForm.reset();
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = messages.errorMessage;
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.querySelector("[data-i18n]").textContent =
          originalButtonText;
      }
    }
  });
}