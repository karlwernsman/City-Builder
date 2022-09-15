/* Imports */

/* Get DOM Elements */
//const article = document.getElementById('display');
const cityName = document.getElementById('city-name');
const nameInput = document.getElementById('name-input');
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

/* Display Functions */
function displayCity() {
    cityName.textContent = city.name;
}
// (don't forget to call any display functions you want to run on page load!)
displayCity();
