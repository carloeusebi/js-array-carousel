// displayers
const gallery = document.getElementById('gallery');
const thumbnails = document.getElementById('thumbnails');

// buttons
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// to *pretend* we dinamically recieve path and #ofPictures from somewhere
const path = 'img/'
const numberOfPcitures = 5;

const pictures = loadPicturesFromPath(path, numberOfPcitures);

let currentIndex = 0;

createElementsOnDom();

displayPicture(currentIndex);

prevButton.addEventListener('click', function () {

    hidePicture(currentIndex);

    //check if we are currently on the first image
    currentIndex = currentIndex === 0 ? pictures.length : currentIndex--;

    displayPicture(currentIndex);

})

nextButton.addEventListener('click', function () {

    hidePicture(currentIndex);

    //check if we are currently on the first image
    currentIndex = currentIndex === pictures.length ? currentIndex = 0 : currentIndex++;

    displayPicture(currentIndex);

})


function loadPicturesFromPath(path) { }

function createElementsOnDom() { }

function displayPicture(index) { }

function hidePicture(inded) { }

