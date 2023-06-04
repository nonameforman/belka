import {openPopup} from "./popup.js";

const openPopupExit = (posMouse, value) => {
  if (posMouse === null || posMouse < 10) {
    openPopup(value);

    $(document).off("mouseleave");
    $(document).off("mouseleave");
    $(document).off("mousemove");
    $(window).off("blur");
    $(window).off("focus");
  }
};

export const modalExit = (value) => {
  const mouseLeave = (e) => {
    $(document).mouseleave(() => {
      let posMouse = null;
      $(document).mousemove((e) => {
        posMouse = e.clientY;
      });

      let timer = setTimeout(() => openPopupExit(posMouse, value), 1500);

      $(window).blur(function () {
        clearTimeout(timer);
        $(document).off("mouseleave");
        $(window).off("blur");
      });

      $(window).focus(function () {
        mouseLeave();
        $(window).off("focus");
        timer = setTimeout(() => openPopupExit(posMouse, value), 1500);
      });
    });
  };

  setTimeout(mouseLeave, 3000);
};
