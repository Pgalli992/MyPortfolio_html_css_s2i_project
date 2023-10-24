"use strict";

// Reveal section
const allSection = document.querySelectorAll(".section");

const btnSubmit = document.querySelector(".btn__submit");
const btnReset = document.querySelector(".btn__reset");

const inputFirstName = document.querySelector(".form__input-firstname");
const inputLastName = document.querySelector(".form__input-lastname");
const inputEmail = document.querySelector(".form__input-email");
const inputMessage = document.querySelector(".form__input-message");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const obsSection = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  obsSection.observe(section);
  section.classList.add("section--hidden");
});

btnReset.addEventListener("click", function (e) {
  inputFirstName.value =
    inputLastName.value =
    inputEmail.value =
    inputMessage.value =
      "";
  inputFirstName.focus();
});
