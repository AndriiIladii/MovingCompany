import "../styles/main.scss";
import axios from "axios";

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
const CHAT_ID = "552926535";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document
  .getElementById("telegramForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const addressFrom = document.getElementById("addressFrom").value;
    const addressTo = document.getElementById("addressTo").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    let message = `<b>Новая заявка на переезд! 🚚</b>\n`;
    message += `<b>Имя:</b> ${name}\n`;
    message += `<b>Email:</b> ${email}\n`;
    message += `<b>Откуда:</b> ${addressFrom}\n`;
    message += `<b>Куда:</b> ${addressTo}\n`;
    message += `<b>Время:</b> ${time}\n`;
    message += `<b>Дата:</b> ${date}`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        alert("Спасибо! Заявка отправлена.");
        this.reset();
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка отправки. Попробуйте позже.");
      })
      .finally(() => {
        console.log("Конец запроса");
      });
  });
