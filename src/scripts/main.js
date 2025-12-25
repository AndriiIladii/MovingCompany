import "../styles/main.scss";
import translations from "./translations/translations.js";
import axios from "axios";
import Swal from "sweetalert2";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  roundLengths: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.15,
      spaceBetween: 15,
    },

    640: {
      slidesPerView: 1.5,
      spaceBetween: 70,
    },

    1024: {
      slidesPerView: 2.5,
      spaceBetween: 70,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },

    1024: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
    },
  },
});

const TOKEN = "8534201234:AAFafvbo6FoNnCm3wkwc5K3IVff4bbKFAMk";
const CHAT_ID = "-5059325929";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document
  .getElementById("telegramForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const addressFrom = document.getElementById("addressFrom").value;
    const addressTo = document.getElementById("addressTo").value;
    const rawDateTime = document.getElementById("dateTime").value;
    const dateTimeFormatted = rawDateTime.replace("T", " ");

    let message = `<b>Новая заявка на переезд! 🚚</b>\n`;
    message += `<b>Имя:</b> ${name}\n`;
    message += `<b>Телефон:</b> ${phone}\n`;
    message += `<b>Откуда:</b> ${addressFrom}\n`;
    message += `<b>Куда:</b> ${addressTo}\n`;
    message += `<b>Дата и время:</b> ${dateTimeFormatted}`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        Swal.fire({
          title: "Спасибо!",
          text: "Ваша заявка успешно отправлена.",
          icon: "success",
          confirmButtonText: "Отлично",
          confirmButtonColor: "#f97316",
        });
        this.reset();
        document.getElementById("dateTime").type = "text";
      })
      .catch((err) => {
        console.warn(err);
        Swal.fire({
          title: "Ошибка!",
          text: "Не удалось отправить заявку. Попробуйте позже.",
          icon: "error",
          confirmButtonText: "Закрыть",
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => {
        console.log("Конец запроса");
      });
  });

const selectedLang = document.getElementById("selectedLang");
const languageList = document.getElementById("languageList");
const listItems = languageList.querySelectorAll("a");

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    const langCode = this.getAttribute("data-value");
    const langText = this.textContent;

    selectedLang.textContent = langText;

    selectedLang.className = "header__selectedLanguage";
    if (langCode !== "ru") {
      selectedLang.classList.add(langCode);
    }

    languageList.style.display = "none";

    setTimeout(() => {
      languageList.style.display = "";
    }, 50);
  });
});

const servicesData = {
  apartment: {
    title: "Квартирные переезды",
    text: "Выполняем погрузку, транспортировку и разгрузку мебели и личных вещей. При необходимости помогаем с разборкой, сборкой и упаковкой для безопасной транспортировки.Работаем аккуратно и обеспечиваем надёжную доставку на новый адрес.",
  },
  office: {
    title: "Переезды офисов и бизнесов",
    text: "Выполняем офисные переезды с погрузкой, транспортировкой и разгрузкой мебели, оборудования и документов. При необходимости осуществляем демонтаж и монтаж мебели.Бережно относимся к офисной технике и работаем оперативно, минимизируя простой бизнеса.",
  },
  delivery: {
    title: "Доставка покупок",
    text: "Выполняем доставку покупок из магазинов, включая мебель, бытовую технику и другие крупногабаритные товары. При необходимости помогаем с погрузкой и разгрузкой. Гарантируем аккуратную доставку ваших покупок по указанному адресу.",
  },
  materials: {
    title: "Доставка стройматериалов",
    text: "Перевозка смесей, гипсокартона, плитки и других стройматериалов. Наш транспорт подходит для тяжелых грузов. Возможен заказ грузчиков для подъема материалов на этаж.",
  },
  cleaning: {
    title: "Клининг",
    text: "Предоставляем клининговые услуги для квартир, домов, офисов и коммерческих помещений. Выполняем разовую и регулярную уборку с использованием профессионального оборудования и эффективных средств. Наши специалисты работают аккуратно, соблюдают стандарты чистоты и гарантируют порядок и комфорт в каждом помещении.",
  },
  fragile: {
    title: "Хрупкие грузы",
    text: "Выполняем перевозку хрупких вещей и грузов с повышенными требованиями к сохранности. Используем надёжную упаковку, аккуратную погрузку и фиксацию груза в автомобиле.Обеспечиваем бережную транспортировку и доставку в целости и сохранности.",
  },
  special: {
    title: "Перевозка спец. грузов",
    text: "Выполняем перевозку нестандартных и сложных грузов: крупногабаритного оборудования, тяжёлых конструкций, промышленных станков, а также роялей и пианино, требующих особой аккуратности.",
  },
  transfer: {
    title: "Трансфер и поездки",
    text: "Выполняем пассажирские перевозки с комфортом и соблюдением всех требований безопасности. Обеспечиваем трансферы, поездки по городу и междугородние маршруты для частных лиц и организаций.Мы используем современный транспорт в безупречном техническом состоянии, управляемый опытными и ответственными водителями.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("serviceModal");
  const modalTitle = modal.querySelector(".modal__title");
  const modalText = modal.querySelector(".modal__description");
  const closeBtn = modal.querySelector(".modal__close");
  const overlay = modal.querySelector(".modal__overlay");
  const serviceItems = document.querySelectorAll(".services__item");
  const closeLinks = modal.querySelectorAll(".js-close-modal");

  function openModal(serviceType) {
    const data = servicesData[serviceType];
    if (data) {
      modalTitle.textContent = data.title;
      modalText.textContent = data.text;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      const serviceType = item.getAttribute("data-service");
      openModal(serviceType);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  closeLinks.forEach((link) => {
    link.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[lang][key];

    if (translation) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else {
        element.innerHTML = translation;
      }
    }
  });
}

function updateLangInterface(lang, text) {
  selectedLang.innerHTML = text;
  selectedLang.className = `header__selectedLanguage ${lang}`;

  localStorage.setItem("userLang", lang);
  localStorage.setItem("userLangText", text);
}

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    const langCode = this.getAttribute("data-value");
    const langText = this.innerHTML;

    updateLangInterface(langCode, langText);
    translatePage(langCode);

    languageList.style.display = "none";
    setTimeout(() => {
      languageList.style.display = "";
    }, 50);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("userLang");
  const savedText = localStorage.getItem("userLangText");

  if (savedLang && savedText) {
    updateLangInterface(savedLang, savedText);
    translatePage(savedLang);
  } else {
    translatePage("ru");
  }
});
