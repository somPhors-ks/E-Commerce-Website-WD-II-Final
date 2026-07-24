const regexName = /^[a-zA-Z ]{2,}$/;
const regexEmail = /^[\w\.-]+@([\w-]+\.)+[A-Za-z]{2,}$/;
const password = "admin@123PHWDII";

const formSendData = document.getElementById("formSendData");

formSendData.addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("usernameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  let username = false;
  let email = false;
  let pass = false;

  if (regexName.test(usernameInput.value)) {
    usernameInput.style.border = "solid 2px #ffffff4d";
    username = true;
  } else {
    usernameInput.style.border = "solid 2px #b32424";
    username = false;
  }
  if (regexEmail.test(emailInput.value)) {
    emailInput.style.border = "solid 2px #ffffff4d";
    email = true;
  } else {
    emailInput.style.border = "solid 2px #b32424";
    email = false;
  }
  if (password == passwordInput.value) {
    passwordInput.style.border = "solid 2px #ffffff4d";
    pass = true;
  } else {
    passwordInput.style.border = "solid 2px #b32424";
    pass = false;
  }

  if (username && email && pass) {
    localStorage.setItem("usernameInput", usernameInput.value);
    localStorage.setItem("emailInput", emailInput.value);
    localStorage.setItem("passwordInput", passwordInput.value);

    window.location.href = "Dashboard/dashboard.html";
  }
});

// Animation Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.1 },
);

function observeRevealElements() {
  document
    .querySelectorAll(".reveal-up, .reveal-left, .reveal-right")
    .forEach((el) => {
      observer.observe(el);
    });
}
observeRevealElements();
