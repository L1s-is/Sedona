let searchForm = document.querySelector('.search-form');
let searchButton = document.querySelector('.search-button');

let adultsCounterMinus = document.querySelector('[name=btn-counter-adults-minus]');
let adultsCounterPlus = document.querySelector('[name=btn-counter-adults-plus]');
let adultsCounter = document.querySelector('[name="counter-adults"]');
let childCounterMinus = document.querySelector('[name=btn-counter-child-minus]');
let childCounterPlus = document.querySelector('[name=btn-counter-child-plus]');
let childCounter = document.querySelector('[name="counter-child"]');

searchButton.onclick = function () {
  searchForm.classList.toggle('open');
};

adultsCounterMinus.onclick = function () {
  if(adultsCounter.value > 1){
    adultsCounter.value--;
  }
};
adultsCounterPlus.onclick = function () {
  if(adultsCounter.value < 10){
    adultsCounter.value++;
  }
};
childCounterMinus.onclick = function () {
  if(childCounter.value > 1){
    childCounter.value--;
  }
};
childCounterPlus.onclick = function () {
  if(childCounter.value < 10){
    childCounter.value++;
  }
};