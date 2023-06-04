import {closePopup} from "./module/popup.js";

const body = document.querySelector("body");

if ($("#thanks1-body").length > 0) {
  let thanksName = document.querySelector(".thanks__title");
  let nameValue = localStorage.getItem("lpg3746_name");

  if (nameValue == null) {
    thanksName.innerHTML = `Менеджеры уже занимаются Вашей заявкой`;

    document.title = `Cпасибо, Ваша заявка принята 👍`;
  } else {
    thanksName.innerHTML = `
                          <span class="thanks_name">${nameValue},</span>
                           менеджеры уже занимаются Вашей заявкой`;
    document.title = `${nameValue}, спасибо, Ваша заявка принята 👍`;
  }
}

$(".popup__overlay").click((e) => {
  closePopup(e.target.parentElement);
});

$(".button__policy, .politicy").click((e) => {
  $("#popup_policy").addClass("popup_open");
  document.querySelector("body").style.marginRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  document.querySelector("body").style.overflow = `hidden`;
  $(document).off("mouseleave");
});

$("#popup-policy__close").click((e) => {
  $("#popup_policy #overlay_popup").trigger("click");
});
