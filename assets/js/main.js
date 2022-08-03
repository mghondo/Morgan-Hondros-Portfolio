/**
 * Template Name: UpConstruction - v1.1.0
 * Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9Eib2lcAIGKyrnY7NUW2YY6Q2X-Dmr40",
//   authDomain: "contactform-c8efd.firebaseapp.com",
//   projectId: "contactform-c8efd",
//   storageBucket: "contactform-c8efd.appspot.com",
//   messagingSenderId: "536475148888",
//   appId: "1:536475148888:web:ba4c954bab3a5c06c1602d",
//   measurementId: "G-QQSC4FB8S3",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const mainTitle = "Morgan Hondros";
  const formalmainTitleThe = "The Morgan Hondros Portfolio Page";
  const formalNoThe = "Morgan Hondros Portfolio Page";
  const mainTitleCarousel = document.getElementById("main-title");
  mainTitleCarousel.innerText = formalNoThe;

  const bottomSpan = document.getElementById("bottomSpan");
  bottomSpan.innerText = formalmainTitleThe;
  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper(".slides-2", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});

// const date = document.querySelector("[data-date]").dataset.date;
// const h3DateInnerText = document.querySelector(".date-of-countdown");
// const dateString = " PM EST";

// document.querySelectorAll(".if-before-date").style.display = "none";

function init() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const date = document.querySelector("[data-date]").dataset.date;
  const h3DateInnerText = document.querySelector(".date-of-countdown");
  const dateString = " PM EST";
  // const hideThisClass = document.getElementById("main");
  // hideThisClass.style.display = "none";

  let countDown = new Date(date).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      h3DateInnerText.innerText = date + dateString;

      if (document.querySelector("[data-days]") != null) {
        document.querySelector("[data-days]").innerText = Math.floor(
          distance / day
        );
      }

      if (document.querySelector("[data-hours]") != null) {
        document.querySelector("[data-hours]").innerText = Math.floor(
          (distance % day) / hour
        );
      }

      if (document.querySelector("[data-minutes]") != null) {
        document.querySelector("[data-minutes]").innerText = Math.floor(
          (distance % hour) / minute
        );
      }

      if (document.querySelector("[data-seconds]") != null) {
        document.querySelector("[data-seconds]").innerText = Math.floor(
          (distance % minute) / second
        );
      }

      // if (distance < 0) {
      //   clearInterval(x);
      // }
    }, second);
}
// Listen for submit
document.querySelector("#contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get input values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#name").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, message, phone);

  // saveContactInfo(name, email, phone, message);
}

// export default {
//   init,
// };
init();
