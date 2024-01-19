"use strict";

const mobileFilterImg = document.querySelector(".filter-mobile__img");
const modal = document.querySelector(".mobile-modal");
const closeModalBtn = document.querySelector(".mobile-form__close-svg");

mobileFilterImg.addEventListener("click", () => {
  modal.classList.add("mobile-modal_active");
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("mobile-modal_active");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.remove("mobile-modal_active");
    document.body.style.overflow = "auto";
  }
});
