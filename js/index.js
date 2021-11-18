let checkbox = document.querySelector("#mode");
let body = document.querySelector("body");
let checkbox__wrapper = document.querySelector(".navbar-nav__switch");
let sun__icon = document.querySelector("#sun");
let moon__icon = document.querySelector("#moon");
if (checkbox.checked) {
  checkbox__wrapper.style.background = "#ed9526";
  sun__icon.style.opacity = "0";
  body.className = "dark";
  moon__icon.style.display = "block";
} else {
  checkbox__wrapper.style.background = "#fff";
  sun__icon.style.opacity = "1";
  body.className = "light";
  moon__icon.style.display = "none";
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    checkbox__wrapper.style.background = "#ed9526";
    sun__icon.style.display = "none";
    body.className = "dark";
    moon__icon.style.display = "block";
  } else {
    checkbox__wrapper.style.background = "#fff";
    sun__icon.style.display = "block";
    body.className = "light";
    moon__icon.style.display = "none";
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
  observer: true,
  observeParents: true,
  breakpoints: {
    320: {
      loop: false,
      slidesPerView: 1,
    },
    1024: {
      loop: true,
      slidesPerView: 1.5,
    },
  },
});
