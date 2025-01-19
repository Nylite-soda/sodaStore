import { renderNavBarandFooter } from "../shop/scripts/utils/rendering.js";


renderNavBarandFooter();

export function showForm(form) {
  const signInForm = document.getElementById("signInForm");
  const registerForm = document.getElementById("registerForm");
  const signInBtn = document.getElementById("signInBtn");
  const registerBtn = document.getElementById("registerBtn");
  const card = document.getElementById("card");

  if (form === "signIn") {
    card.classList.remove("flip");
    signInForm.classList.add("active");
    registerForm.classList.remove("active");
    signInBtn.classList.add("active");
    registerBtn.classList.remove("active");
  } else {
    card.classList.add("flip");
    signInForm.classList.remove("active");
    registerForm.classList.add("active");
    signInBtn.classList.remove("active");
    registerBtn.classList.add("active");
  }
}

