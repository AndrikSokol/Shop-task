"use strict";

const searchBtn = document.querySelector(".header__search-svg");
const headerMobileBottom = document.querySelector(".mobile-search");
searchBtn.addEventListener("click", () => {
  headerMobileBottom.classList.toggle("mobile-search_active");
});
