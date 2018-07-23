import './index.scss';

// prettier-ignore
const INITIAL_ARRAY = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

const displayBox = (arr) => {
  arr.map((item) => {
    let newEl = document.createElement('div');
    newEl.innerHTML = item;
    newEl.className = 'box__item';
    document
      .getElementById('app')
      .getElementsByClassName('box')[0]
      .appendChild(newEl);
  });
};

const calculateAverage = (arr) => {
  const length = arr.length;
  let sum = arr.reduce((a, b) => {
    return parseFloat(a) + parseFloat(b);
  });

  return (sum / length).toFixed(7);
};

const showResult = (result) => {
  const container = document.getElementById('js-result-container');
  container.innerHTML = result;
};

document.addEventListener('DOMContentLoaded', function() {
  displayBox(INITIAL_ARRAY);

  const button = document.getElementById('js-calculate-average');

  button.addEventListener('click', () => {
    const filteredArray = INITIAL_ARRAY.filter(isNumeric);
    const result = calculateAverage(filteredArray);
    showResult(result);
  });
});
