(function () {
  "use strict";
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("site-navigation");
  if (toggle && menu) {
    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }
    toggle.addEventListener("click", function () {
      var opening = toggle.getAttribute("aria-expanded") !== "true";
      menu.classList.toggle("is-open", opening);
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
    });
    menu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();