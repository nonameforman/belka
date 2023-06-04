const titleLeave = `
          <h2 class="popup__title popup__title-leave">
            <span class="popup__title-main">Уже уходите?</span>
            Не упускайте шанс присоединиться к франшизе Sweet Belka Coffee
          </h2>`;

const titleSteps = `
          <h2 class="popup__title popup__title-steps">
            Получите подробный план открытия кофейни
          </h2>`;

const titleOrderCall = `
          <h2 class="popup__title popup__title-order-call">
            <span class="popup__title-main">Получите больше информации о кофейне</span>
            Скачайте презентацию франшизы
          </h2>`;

window.popupValue = {
  leave: {
    popupClass: "popup__leave",
    title: titleLeave,
    image: "",
    valueInput: "Закрытая",
    inputPopupName:
      "Не упускайте шанс присоединиться к франшизе Sweet Belka Coffee",
    inputSectionName: "-",
    buttonPopup: "Узнать подробнее",
    buttonSection: "-",
  },
  steps: {
    popupClass: "popup__steps",
    title: titleSteps,
    image: "",
    valueInput: "Закрытая",
    inputPopupName: "Получите подробный план открытия кофейни",
    inputSectionName: "От мечты до первой проданной чашки кофе за 36 дней",
    buttonPopup: "Получить",
    buttonSection: "Получить",
  },
  header: {
    popupClass: "popup__header",
    title: titleOrderCall,
    image: "",
    valueInput: "Закрытая",
    inputPopupName: "заказать звонок - header",
    inputSectionName:
      "Получите больше информации. Скачайте презентацию франшизы",
    buttonPopup: "Получить",
    buttonSection: "Получить",
  },
};
