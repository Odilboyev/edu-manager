let checkbox = document.querySelector("#mode");
let body = document.querySelector("body");
let checkbox__wrapper = document.querySelector(".navbar-nav__switch");
let sun__icon = document.querySelector("#sun");

if (checkbox.checked) {
  checkbox__wrapper.style.background = "#ed9526";
  sun__icon.style.opacity = "0";
  body.className = "dark";
} else {
  checkbox__wrapper.style.background = "#fff";
  sun__icon.style.opacity = "1";
  body.className = "light";
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    checkbox__wrapper.style.background = "#ed9526";
    sun__icon.style.opacity = "0";
    body.className = "dark";
  } else {
    checkbox__wrapper.style.background = "#fff";
    sun__icon.style.opacity = "1";
    body.className = "light";
  }
});

// swipers

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: 2500,
  autoplayDisableOnInteraction: true,
  slidesPerView: 1.3,
  breakpoints: {
    320: {
      loop: false,
      slidesPerView: 1,
    },
    1024: {
      loop: true,
      slidesPerView: 1.3,
    },
  },
});
