"use strict";

const listCategory = document.querySelector(".list__category");
const listBrand = document.querySelector(".list__brand");
const listMobileCategory = document.querySelector(".mobile-list__category");
const listMobileBrand = document.querySelector(".mobile-list__brand");

const [
  dropdownCategory,
  dropdownBrand,
  dropdownMobileCaterogy,
  dropdownMobileBrand,
] = document.querySelectorAll(".dropdown");

const mobileList = [listMobileCategory, listMobileBrand];

const removeActiveMobileDropdown = (node) => {
  mobileList.forEach((list) => {
    if (
      node != list &&
      (list.classList.contains("mobile-list__category_active") ||
        list.classList.contains("mobile-list__brand_active"))
    ) {
      list.classList.remove("mobile-list__category_active");
      list.classList.remove("mobile-list__brand_active");
      const parent = list.parentElement;
      const dropdownSeparator = parent.querySelector(
        ".dropdown__separator_active"
      );
      dropdownSeparator.classList.remove("dropdown__separator_active");
    }
  });
};

const dropdownSeparators = document.querySelectorAll(".dropdown__separator");

const switchValueOfComboBox = (target, classNameOfLink) => {
  // Check if the clicked element is an li with the class list__option
  if (target.classList.contains(classNameOfLink)) {
    // Get the closest dropdown-wrapper and then find the dropdown__title within it
    const dropdownTitle =
      target.parentElement.parentElement.querySelector(".dropdown__title");
    // Get the value attribute of the clicked li element
    const value = target.textContent;
    // Set the text content of the dropdown title to the selected value
    dropdownTitle.textContent = value;
  }
};

dropdownCategory.addEventListener("click", (event) => {
  const target = event.target;
  switchValueOfComboBox(target, "list__option");
  // Toggle the visibility of the dropdown list and separator
  listCategory.classList.toggle("list__category_active");
  dropdownSeparators[0].classList.toggle("dropdown__separator_active");
});

dropdownBrand.addEventListener("click", (event) => {
  const target = event.target;
  switchValueOfComboBox(target, "list__option");
  listBrand.classList.toggle("list__brand_active");
  dropdownSeparators[1].classList.toggle("dropdown__separator_active");
});

dropdownMobileCaterogy.addEventListener("click", (event) => {
  const target = event.target;
  switchValueOfComboBox(target, "mobile-list__option");
  removeActiveMobileDropdown(listMobileCategory);
  listMobileCategory.classList.toggle("mobile-list__category_active");
  dropdownSeparators[2].classList.toggle("dropdown__separator_active");
});

dropdownMobileBrand.addEventListener("click", (event) => {
  const target = event.target;
  switchValueOfComboBox(target, "mobile-list__option");
  removeActiveMobileDropdown(listMobileBrand);
  listMobileBrand.classList.toggle("mobile-list__brand_active");
  dropdownSeparators[3].classList.toggle("dropdown__separator_active");
});
