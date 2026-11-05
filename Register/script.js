/* =========================================
   SCRIPT.JS
   Only two things need JavaScript here:
   1. SHOW / HIDE password buttons
   2. "NEW" captcha button (changes the digits)
   Everything else (hover effects, animation) is pure CSS.
========================================= */

/* ---------- 1. Show / hide password ---------- */
document.querySelectorAll("[data-toggle-password]").forEach(function (button) {
  button.addEventListener("click", function () {
    var input = document.getElementById(button.dataset.togglePassword);
    var isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    // Keep the little ring icon, change only the word
    button.lastChild.textContent = isHidden ? "HIDE" : "SHOW";
  });
});

/* ---------- 2. New captcha digits ---------- */
document.getElementById("captcha-new").addEventListener("click", function () {
  document.querySelectorAll("#captcha-svg text").forEach(function (digit) {
    digit.textContent = Math.floor(Math.random() * 10);
  });
});

/* ---------- Demo only: stop the form from reloading the page ---------- */
document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();
});
