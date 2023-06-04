const calculateValue = {type: 1, month: 1};
const buttons = [...document.querySelectorAll(".calculator__format-form-item")];

const calculate = (data) => {
  calculateValue.month = data;
  let arrValue = [];
  if (calculateValue.type == 1) {
    arrValue = [
      137881, 46996, 80935, 100758, 136489, 303412, 301925, 124144, 136600,
      311352, 327611, 287948,
    ];
  } else if (calculateValue.type == 2) {
    arrValue = [
      76119, 56210, 82478, 98654, 126337, 150703, 159962, 116590, 126950,
      155576, 175069, 138701,
    ];
  }

  let calculatorRes = document.querySelector("#calculatorRes");

  calculatorRes.innerHTML = `${Math.round(arrValue[data - 1]).toLocaleString(
    "ru-RU",
  )} рублей`;
};

buttons.forEach((i) => {
  i.addEventListener("click", (e) => {
    calculateValue.type = e.currentTarget.dataset.type;
    calculate(calculateValue.month);
  });
});

export function calculator() {
  $("#calculator-time").ionRangeSlider({
    min: 1,
    max: 12,
    step: 1,
    grid: true,
    from: 7,
    grid_snap: true,
    hide_min_max: true,
    onChange: (data) => {
      calculate(data.from);
    },
    onStart: (data) => {
      calculate(data.from);
    },
  });
}
