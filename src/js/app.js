import {eventsButtons} from "./module/eventsButtons.js";
import {calculator} from "./module/calculator.js";

const input = document.querySelector("#formatInp");
const buttons = document.querySelectorAll(".formats__options-item");

if ($("#main-body").length > 0) {
  $(document).ready(() => {
    eventsButtons();

    buttons.forEach((item) => {
      item.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.value);
        input.value = e.currentTarget.dataset.value;
      });
    });

    calculator();

    $(".input--phone").inputmask("+7 (999) 999-99-99");

    let sliderCoffee = new Splide(".coffee__splide", {
      classes: {
        arrow: "splide__arrow coffee__arrow",
        arrows: "splide__arrows coffee__arrows",
      },
      type: "loop",
      focus: "center",
      perPage: 1,
      fixedWidth: 370,
      gap: 30,
      pagination: false,
      start: 2,
      updateOnMove: true,
      speed: 1000,
    });

    let sliderSectionTop = new Splide(".section-top__splide", {
      destroy: true,
      breakpoints: {
        621: {
          type: "slide",
          perPage: 1,
          destroy: false,
          pagination: true,
          arrows: false,
          gap: 200,
        },
      },
    });

    let sliderSteps = new Splide(".steps__splide", {
      destroy: true,
      breakpoints: {
        821: {
          type: "slide",
          perPage: 2,
          perMove: 2,
          destroy: false,
          pagination: true,
          arrows: false,
          gap: 20,
          fixedWidth: 250,
        },
        621: {
          perPage: 1,
          perMove: 1,
        },
      },
    });

    let sliderStart = new Splide(".start__splide", {
      destroy: true,
      breakpoints: {
        821: {
          type: "slide",
          perPage: 1,
          perMove: 1,
          destroy: false,
          pagination: true,
          arrows: false,
          gap: 20,
          fixedWidth: 250,
        },
        621: {
          perPage: 1,
          perMove: 1,
        },
      },
    });

    sliderCoffee.mount();
    sliderSectionTop.mount();
    sliderSteps.mount();
    sliderStart.mount();
  });
}
