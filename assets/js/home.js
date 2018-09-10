var homeBody = document.querySelector(".body__home");

window.addEventListener("scroll", function () {
  if (isElementInViewport(document.getElementById("content"), 2) && window.innerWidth > 992) {
    if (!homeBody.classList.contains("show_nav"))
      homeBody.classList.add("show_nav");
  } else {
    if (!document.querySelector("nav[data-state='open']"))
      homeBody.classList.remove("show_nav");
  }

  document.querySelectorAll(".home__content_item").forEach(function (el) {
    if (isElementInViewport(el))
      el.setAttribute("data-in-view", "true");
  });

  if (window.innerWidth < 768) {
    var scrolled = $(window).scrollTop();
    $('.parallax').each(function (index, element) {
      var initY = $(this).offset().top;
      var height = $(this).innerHeight();
      var endY = initY + $(this).height();
      var visible = isElementInViewport(this, 1);

      if (visible) {
        var diff = scrolled - initY;
        var ratio = Math.round((diff / height) * 100);
        $(this).css('background-position', 'center ' + parseInt((ratio)) + 'px');
      }
    })
  }
});

document.querySelectorAll(".pillar__close").forEach(function (closeButton) {
  closeButton.addEventListener("click", function (e) {
    e.currentTarget.parentElement.classList.remove("active");
    e.currentTarget.parentElement.classList.add("inactive");
  });
});

document.querySelectorAll(".accordion .accordion__item > .home__pillar_content").forEach(function(pillar, index) {
  pillar.addEventListener("click", function(e) {
    var isActive = this.parentElement.getAttribute("data-accordion-state") === "active";

    if (isActive || window.innerWidth > 767)
      return;

    var active = document.querySelector(".accordion__item[data-accordion-state='active']");
    var scroll = 118.27 + (index * 75);
    var that = this;
    
    if (index > 0)
      scroll -= 75;

    $("html, body").animate({
      scrollTop: scroll
    }, 500);

    setTimeout(function() {
      active.setAttribute("data-accordion-state", "inactive");
    }, 500);
    
    setTimeout(function() {
      that.parentElement.setAttribute("data-accordion-state", "active");
  
      $(".accordion__item[data-accordion-state='active'] .home__pillar_image").css("background-position", "center", 0);
    }, 1000);
  });
});

var hoverTime;

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    if (isElementInViewport(document.getElementById("content"), 2) && window.innerWidth > 992) {
      if (!homeBody.classList.contains("at_bottom"))
        homeBody.classList.add("show_nav");
    } else {
      homeBody.classList.remove("show_nav");
    }

    document.querySelectorAll(".home__pillar[data-state='unready']").forEach(function (pillar) {
      pillar.setAttribute("data-state", "ready");
    });

    document.querySelectorAll(".home__content_item").forEach(function (el) {
      if (isElementInViewport(el))
        el.setAttribute("data-in-view", "true");
    });

    document.querySelectorAll(".smooth_link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        var el = e.currentTarget.getAttribute("href");

        $("html, body").animate({
          scrollTop: $(el).offset().top
        }, 500);
      })
    });

    document.querySelector(".loading_screen").setAttribute("data-state", "ready");
    document.querySelector("body > main > section:first-of-type").setAttribute("data-state", "ready");
  }
}

document.querySelectorAll(".home__pillar_image").forEach(function (pillarImage) {
  pillarImage.addEventListener("mouseover", function (e) {
    var parent = e.currentTarget.parentElement;

    if (parent.classList.contains("active") || window.innerWidth < 992)
      return;

    hoverTime = setTimeout(function () {
      if (parent.classList.contains("inactive")) {
        parent.classList.remove("inactive");
        parent.classList.add("active");
      } else {
        parent.classList.add("active");
      }
    }, 700)
  });

  pillarImage.addEventListener("mouseleave", function (e) {
    clearTimeout(hoverTime);
  });

  pillarImage.addEventListener("click", function (e) {
    clearTimeout(hoverTime);

    var parent = e.currentTarget.parentElement;

    if (parent.classList.contains("active"))
      return;

    if (parent.classList.contains("inactive")) {
      parent.classList.remove("inactive");
      parent.classList.add("active");
    } else {
      parent.classList.add("active");
    }
  });
});