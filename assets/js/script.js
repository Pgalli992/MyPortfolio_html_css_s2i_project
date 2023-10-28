"use strict";

const navbar = document.querySelector(".navigation__nav");
const allInterest = document.querySelectorAll(".section__interests-box");
const interestCoding = document.querySelector(".section__interests_coding");
const interestBlockchain = document.querySelector(
  ".section__interests_blockchain"
);
const interestCrypto = document.querySelector(".section__interests_crypto");

// Buttons
const btnContactMe = document.querySelector(".header__main--nav-cta");
const btnSubmit = document.querySelector(".btn__submit");
const btnReset = document.querySelector(".btn__reset");

// Input fields
const inputFirstName = document.querySelector(".form__input-firstname");
const inputLastName = document.querySelector(".form__input-lastname");
const inputEmail = document.querySelector(".form__input-email");
const inputMessage = document.querySelector(".form__input-message");

// Sections
const header = document.querySelector(".header");
const sectionInterests = document.querySelector(".section__interests");

// Page scrolling from navbar
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navigation__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// Page scrolling from "Contact me" header button
btnContactMe.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// Functions

function clearForm() {
  inputFirstName.value =
    inputLastName.value =
    inputEmail.value =
    inputMessage.value =
      "";
  inputFirstName.focus();
}

// Reveal section

/*
******************************************************************************************************************
// It crate problems when the user clicks on "My interests" link before removing the observer
const revealInterest = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("interest--hidden");
  observer.unobserve(entry.target);
};

const obsInterest = new IntersectionObserver(revealInterest, {
  root: null,
  threshold: 0.5,
});
allInterest.forEach(function (interest) {
  obsInterest.observe(interest);
  interest.classList.add("interest--hidden");
});
******************************************************************************************************************
*/
const revealInterest = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  interestCoding.classList.remove("interest--hidden");
  interestBlockchain.classList.remove("interest--hidden");
  interestCrypto.classList.remove("interest--hidden");
  observer.unobserve(entry.target);
};

const obsInterest = new IntersectionObserver(revealInterest, {
  root: null,
  threshold: 0.35,
});
allInterest.forEach(function (interest) {
  obsInterest.observe(interest);
  interestCoding.classList.add("interest--hidden");
  interestBlockchain.classList.add("interest--hidden");
  interestCrypto.classList.add("interest--hidden");
});

// Reset button function

btnReset.addEventListener("click", clearForm());

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
obs.observe(header);

// Send mail function

// btnSubmit.addEventListener("click", clearForm());
btnSubmit.addEventListener("click", function (e) {
  const variables = {
    from_name: document.getElementById("firstname").value,
    from_lastname: document.getElementById("lastname").value,
    message: document.getElementById("message").value,
    email: document.getElementById("email").value,
  };
  emailjs
    .send("contact_service", "portfolio_contact_form", variables)
    .then(function (res) {
      alert("Success!" + res.status);
    });
});
