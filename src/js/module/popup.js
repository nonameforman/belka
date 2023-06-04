const html = document.querySelector("html");
const header = document.querySelector("header");

export const openPopup = (valueObj) => {
  let titlePopup = document.querySelector("#popup-title");
  let buttonPopup = document.querySelector(".popup__container-wrapper button");

  let sectionNamePopup = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["section-name"];
  let sectionBtnText = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["section-btn-text"];
  let popupBtnText = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["form-btn-text"];
  let sectionNameText = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["section-name-text"];
  let popupNameText = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["form-name-text"];

  sectionNamePopup.defaultValue = "Закрытая";
  sectionNamePopup.value = "Закрытая";
  sectionNameText.defaultValue = valueObj.inputSectionName;
  sectionNameText.value = valueObj.inputSectionName;
  popupNameText.defaultValue = valueObj.inputPopupName;
  popupNameText.value = valueObj.inputPopupName;
  sectionBtnText.defaultValue = valueObj.buttonSection;
  sectionBtnText.value = valueObj.buttonSection;
  popupBtnText.defaultValue = valueObj.buttonPopup;
  popupBtnText.value = valueObj.buttonPopup;

  titlePopup.innerHTML = valueObj.title;
  buttonPopup.innerHTML = valueObj.buttonPopup;
  $(`#popupContainer`).removeClass("popup__section-top");
  $(`#popupContainer`).removeClass("popup__order-call");
  $(`#popupContainer`).removeClass("popup__leave");
  $(`#popupContainer`).addClass(valueObj.popupClass);

  $(`#imagePopup`).removeClass("popup__image-leave");
  $(`#imagePopup`).removeClass("popup__image-order-call");
  $(`#imagePopup`).removeClass("popup__image-section-top");
  $(`#imagePopup`).addClass(valueObj.image);

  $("#popup").addClass("popup_open");
  html.style.marginRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  $(document).on("keydown", function (e) {
    if (e.which === 27) {
      $(".popup.popup_open .popup__overlay").trigger("click");
      e.preventDefault();
      return false;
    }
  });

  html.style.overflow = `hidden`;
  $(document).off("mouseleave");
};

export const closePopup = (popup) => {
  $(popup).addClass("popup_close");
  $(popup).removeClass("popup_open");
  html.style.marginRight = `0px`;
  html.style.overflow = `initial`;
  // header.style.paddingRight = `0px`;
  html.style.overflowX = `clip`;
  setTimeout(() => {
    $(popup).removeClass("popup_close");
  }, 300);
};
