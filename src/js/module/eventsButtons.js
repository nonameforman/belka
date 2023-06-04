import {openPopup, closePopup} from "./popup.js";
// import {popupValue} from "../const/popupValue.js";
import {modalExit} from "./modalExit.js";

export const eventsButtons = () => {
  const html = document.querySelector("html");
  const header = document.querySelector("header");

  $(".button__policy, .politicy").click((e) => {
    $("#popup_policy").addClass("popup_open");
    html.style.marginRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;

    header.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;

    html.style.overflow = `hidden`;
    $(document).off("mouseleave");
  });

  $(".popup__overlay").click((e) => {
    closePopup(e.target.parentElement);
  });

  $("#popup-policy__close").click((e) => {
    $("#popup_policy #overlay_popup").trigger("click");
  });

  $(".popup__close-btn").click(() => {
    $("#popup #overlay_popup").trigger("click");
  });

  modalExit(window.popupValue.leave);
  // $("#reasonsBtn").click((e) => openPopup(window.popupValue.reasons));
  $("#stepsBtn").click((e) => openPopup(window.popupValue.leave));
  $("#headerBtn").click((e) => openPopup(window.popupValue.header));
};
