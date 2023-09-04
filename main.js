/*----------------
    DOM ELEMENTS
----------------*/
const totalEl = document.querySelector(".total");
const btnGenerateEl = document.querySelector(".generate");
const numbersListEl = document.querySelector(".numbers-list");

/*----------------
    STATE
----------------*/
const numbersList = [1, 10, 20];

/*----------------
    FUNCTIONS
----------------*/
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updateDOM() {
  numbersListEl.innerHTML = "";
  numbersList.forEach((elm) => {
    numbersListEl.innerHTML += `<div class="number">${elm}</div>`;
  });
  totalEl.innerHTML = numbersList.length;
}

/*----------------
    EVENTS
----------------*/
btnGenerateEl.addEventListener("click", function () {
  const number = getRndInteger(1, 100);
  numbersList.push(number);
  updateDOM();
});

/*----------------
    INIT
----------------*/
updateDOM();
