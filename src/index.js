console.log('%c HI', 'color: firebrick')

// function to fetch image data and apply image function to each element in data array:
function appendImages() {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(dogData => dogData["message"].forEach(dog => showImages(dog)));
}


// function to add image to dog image container:
function showImages(dog){
    let container = document.getElementById('dog-image-container');
    let image = document.createElement('img');
    image.src = `${dog}`;
    container.appendChild(image);
}

appendImages();

// function to add dog breeds to list:
function listBreed(breed) {
    let breedList = document.getElementById('dog-breeds');
    let breedName = document.createElement('li');
    breedName.textContent = `${breed}`; 
    breedName.className = 'breeds';
    breedList.appendChild(breedName);
    breedName.addEventListener('click', textColorChange)
}
// function to fetch dog breed data and apply list function to each element:
function appendDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(dogBreeds => {
        for (const breed in dogBreeds.message){
            listBreed(breed);

        }
    })
}

appendDogBreeds()

// function to change text color when clicked

function textColorChange(e){
    e.target.style.color = 'red'
}


function filterDogs(){
    let dogList = document.querySelectorAll
}




