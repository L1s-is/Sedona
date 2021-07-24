let searchForm = document.querySelector('.search-form');
let searchButton = document.querySelector('.search-button');

searchButton.onclick = function () {
  searchForm.classList.toggle('open');
};