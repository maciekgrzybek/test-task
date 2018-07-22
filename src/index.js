import "./index.scss";
// prettier-ignore
const initialArray = [3,7,'d','3',7,8,'df',,23,6,2,67,'g','34',12,34,5];

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);
const filteredArray = initialArray.filter(isNumeric);

const calculateAverage = arr => {
  const length = arr.length;
  let sum = arr.reduce((a, b) => {
    return parseFloat(a) + parseFloat(b);
  });
  return sum / length;
};

const showBox = arr => {
  arr.map(item => {
    let newEl = document.createElement("div");
    newEl.innerHTML = item;
    newEl.className = "box__item";
    document
      .getElementById("app")
      .getElementsByClassName("box")[0]
      .appendChild(newEl);
  });
};

document.addEventListener("DOMContentLoaded", function() {
  showBox(filteredArray);
  const button = document.getElementById("js-calculate-average");
  const container = document.getElementById("js-result-container");

  button.addEventListener("click", () => {
    const result = calculateAverage(filteredArray);
    container.innerHTML = result;
  });
});
