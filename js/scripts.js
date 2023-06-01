// displayers
const gallery = document.getElementById('gallery');
const thumbnails = document.getElementById('thumbnails');

// buttons
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// to *pretend* we dinamically recieve path and #ofPictures from somewhere
const path = 'img/'
const numberOfPcitures = 5;

const sources = loadPicturesFromPath(path, numberOfPcitures);

let currentIndex = 0;

createElementsOnDom();

// load new elements from dom
const carouselPictures = document.querySelectorAll('#carousel img');
const thumbnailPictures = document.querySelectorAll('#thumbnails img');

// activate first picture
displayPicture(currentIndex);

prevButton.addEventListener('click', function () {

    hidePicture(currentIndex);

    // i use sources as a comparison because it is the parent of both carousel and thumbnails array
    // check if we are currently on the first image
    currentIndex = currentIndex === 0 ? sources.length - 1 : --currentIndex;

    displayPicture(currentIndex);

})

nextButton.addEventListener('click', function () {

    hidePicture(currentIndex);

    // check if we are currently on the last image
    currentIndex = currentIndex === sources.length - 1 ? 0 : ++currentIndex;

    displayPicture(currentIndex);

})


function loadPicturesFromPath(path, num) {

    const pictures = [];

    for (let i = 1; pictures.length < num; i++) {

        const picture = `${path}0${i}.webp`;
        pictures.push(picture);
    }

    return pictures;
}


function createElementsOnDom() {

    let imageElements = '';

    for (let i = 0; i < sources.length; i++) {

        const source = sources[i];

        const imageElement = `<img src="${source}" alt="Picture number ${i + 1}">`;

        imageElements += imageElement;
    }

    gallery.innerHTML = thumbnails.innerHTML = imageElements;

}


function displayPicture(index) {

    carouselPictures[index].classList.add('active');
    thumbnailPictures[index].classList.add('active');
}

function hidePicture(index) {

    carouselPictures[index].classList.remove('active');
    thumbnailPictures[index].classList.remove('active');
}

