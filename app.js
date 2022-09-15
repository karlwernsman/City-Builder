/* Imports */

/* Get DOM Elements */
const article = document.getElementById('display');
const cityName = document.getElementById('city-name');
const nameInput = document.getElementById('name-input');
const climateSelect = document.getElementById('climate-select');
const climateImg = document.getElementById('climate-img');

/* State */
const city = {
    name: '',
    climate: '',
    architecture: '',
    attractions: '',
};
/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});
/* Display Functions */
function displayCity() {
    article.classList = '';
    article.classList.add(city.climate);
    cityName.textContent = city.name;
    climateImg.src = 'assets/' + city.climate + '-climate.jpeg';
}
// (don't forget to call any display functions you want to run on page load!)
displayCity();
