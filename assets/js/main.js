// Footer year and back-to-top button.
(function () {
  "use strict";

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var topBtn = document.getElementById("topBtn");
  if (!topBtn) return;

  function toggleTopBtn() {
    topBtn.classList.toggle("show", window.scrollY > 400);
  }

  window.addEventListener("scroll", toggleTopBtn, { passive: true });
  toggleTopBtn();

  topBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", location.pathname + location.search);
  });
})();
