import "../styles/main.scss";
import axios from "axios";
import Swal from "sweetalert2";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  loop: true,
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
