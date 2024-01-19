"use strict";

import search from "../../img/icons/search.svg";
import camera from "../../img/camera.png";
import camera2x from "../../img/camera@2x.png";
import arrowDown from "../../img/icons/arrow-down.svg";
import filter from "../../img/icons/filter.svg";
const headerInput = document.querySelector(".header__input");

const searchImage = headerInput.querySelector("img");

searchImage.src = search;

const products = document.querySelectorAll(".product");

products.forEach((product, index) => {
  const img = product.querySelector(".product__img");
  img.src = index == 0 ? camera2x : camera;
});

const arrowDownElements = document.querySelectorAll(".dropdown__arrow");

arrowDownElements.forEach((element) => {
  element.src = arrowDown;
});

document.querySelector(".filter-mobile__img").src = filter;
