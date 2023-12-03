"use strict";

// Functions
const clearForm = function (e) {
  inputFirstName.value =
    inputLastName.value =
    inputEmail.value =
    inputMessage.value =
      "";
  inputFirstName.focus();
};

const sendMail = function (e) {
  if (
    (inputFirstName.value !== "") &
    (inputLastName.value !== "") &
    (inputEmail.value !== "")
  ) {
    const variables = {
      from_name: document.getElementById("firstname").value,
      from_lastname: document.getElementById("lastname").value,
      message: document.getElementById("message").value,
      email: document.getElementById("email").value,
    };
    emailjs
      .send("contact_service", "portfolio_contact_form", variables)
      .then(function (res) {
        alert("Success!");
      });
  } else {
    alert("Please fill out the form");
  }
};

// Page scrolling from navbar
/*
******************************************************************************************************************

// It does not work from links that pointing different html page.
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navigation__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
******************************************************************************************************************
*/
navLinkWhoIAm.addEventListener("click", scrollTo);
navLinkInterests.addEventListener("click", scrollTo);

// Page scrolling from "Contact me" header button
btnContactMe.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

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
btnReset.addEventListener("click", clearForm);

// Event handler
btnSubmit.addEventListener("click", sendMail);
btnSubmit.addEventListener("click", clearForm);

// Observer
obs.observe(header);
