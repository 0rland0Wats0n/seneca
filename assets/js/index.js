(function() {
    var nav = document.querySelector("body nav");
    var navList = document.querySelector(".nav__list");
    var toggler = document.querySelector(".nav__toggle");

  toggler.addEventListener("click", function() {
    var state = toggler.getAttribute("data-state");

    if (state === "closed") {
      nav.setAttribute("data-state", "open");
      toggler.setAttribute("data-state", "open");
      navList.setAttribute("data-state", "open");
    } else {
      nav.setAttribute("data-state", "closed");
      toggler.setAttribute("data-state", "closed");
      navList.setAttribute("data-state", "closed");
    }
  });

  window.addEventListener("resize", function() {
    var state = toggler.getAttribute("data-state");
    var innerWidth = window.innerWidth;

    if (innerWidth > 992 && state === "open") {
      nav.setAttribute("data-state", "closed");
      toggler.setAttribute("data-state", "closed");
      navList.setAttribute("data-state", "closed");
    }
  });
})();