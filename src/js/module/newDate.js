export function newDate() {
  let dateNow = new Date().getFullYear();
  let dateText = document.querySelector(".date-now");

  if (dateNow != 2023) {
    dateText.innerHTML = `<br/>2023 - ${dateNow}`;
  }
}
