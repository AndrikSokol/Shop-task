"use strict";

const mobileNavOpenBtn = document.querySelector(".header__burger");
const mobileNav = document.querySelector(".mobile-nav ");

mobileNavOpenBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav_active");
});
