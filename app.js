/* Imports *

/* Get DOM Elements */
const article = document.getElementById('display');
const cityName = document.getElementById('city-name');
const nameInput = document.getElementById('name-input');
const climateSelect = document.getElementById('climate-select');
const climateImg = document.getElementById('climate-img');
const architectureSelect = document.getElementById('architecture-select');
const architectureImg = document.getElementById('architecture-img');
const attractionList = document.getElementById('attraction-list');
const attractionInput = document.getElementById('attraction-input');
const addAttractionButton = document.getElementById('add-attraction-button');

/* State */
const city = {
    name: '',
    climate: 'tropical',
    architecture: 'mid-century',
    attractions: [],
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

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

addAttractionButton.addEventListener('click', () => {
    city.attractions.push(attractionInput.value);
    displayAttractions();
    attractionInput.value = '';
});

/* Display Functions */
function displayCity() {
    article.classList.value = '';
    article.classList.add(city.climate, city.architecture);
    cityName.textContent = city.name;
    climateImg.src = 'assets/' + city.climate + '-climate.jpeg';
    architectureImg.src = 'assets/' + city.architecture + '-architecture.jpeg';
}

function displayAttractions() {
    attractionList.innerHTML = '';

    for (const attraction of city.attractions) {
        const liElement = document.createElement('li');
        liElement.textContent = attraction;
        attractionList.append(liElement);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayCity();
displayAttractions();
