(function() {
  let navList = document.querySelector(".nav__list"),
    toggler = document.querySelector(".nav__toggle");

  toggler.addEventListener("click", () => {
    const state = toggler.getAttribute("data-state");

    if (state === "closed") {
      toggler.setAttribute("data-state", "open");
      navList.setAttribute("data-state", "open");
    } else {
      toggler.setAttribute("data-state", "closed");
      navList.setAttribute("data-state", "closed");
    }
  });

  window.addEventListener("resize", () => {
    const state = toggler.getAttribute("data-state");
    const { innerWidth } = window;

    if (innerWidth > 992 && state === "open") {
      toggler.setAttribute("data-state", "closed");
      navList.setAttribute("data-state", "closed");
    }
  });
})();