import "../styles/main.scss";

// scripts/main.js
import "../styles/main.scss";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  slidesPerView: 3,
  centeredSlides: true,

  spaceBetween: 90,
  loopedSlides: 6,
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
});
