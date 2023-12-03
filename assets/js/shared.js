"use strict";

const navbar = document.querySelector(".navigation__nav");
const allInterest = document.querySelectorAll(".section__interests-box");
const interestCoding = document.querySelector(".section__interests_coding");
const interestBlockchain = document.querySelector(
  ".section__interests_blockchain"
);
const interestCrypto = document.querySelector(".section__interests_crypto");

// Input fields
const inputFirstName = document.querySelector(".form__input-firstname");
const inputLastName = document.querySelector(".form__input-lastname");
const inputEmail = document.querySelector(".form__input-email");
const inputMessage = document.querySelector(".form__input-message");

// Sections
const header = document.querySelector(".header");
const sectionInterests = document.querySelector(".section__interests");
const sectionTimeline = document.querySelector(".section__timeline");

// Navlink
const navLinkWhoIAm = document.querySelector(".navigation__link-who");
const navLinkInterests = document.querySelector(".navigation__link-interests");
const navLinkExperience = document.querySelector(
  ".navigation__link-experience"
);
const navLinkTimeline = document.querySelector(".navigation__link-timeline");
const navLinkHobbies = document.querySelector(".navigation__link-hobbies");
const navLinkSkills = document.querySelector(".navigation__link-skills");
// Buttons
const btnContactMe = document.querySelector(".header__main--nav-cta");
const btnSubmit = document.querySelector(".btn__submit");
const btnReset = document.querySelector(".btn__reset");

// Functions
const scrollTo = function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};

// Sticky navigation
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
