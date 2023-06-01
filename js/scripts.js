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

// it's not necessary to pass the array but it improves readibility
createElementsOnDom(sources, [gallery, thumbnails]);

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

/**
 * Loads image sources for a specified number and path in an array and returns it
 * @param  {String} path path of files, ex 'img/'
 * @param  {Number} num the number of sources to load
 * @return {[String]}      [an array containing all the sources]
 */

function loadPicturesFromPath(path, num) {

    const pictures = [];

    for (let i = 1; pictures.length < num; i++) {

        const picture = `${path}0${i}.webp`;
        pictures.push(picture);
    }

    return pictures;
}

/**
 * Creates img elements on the dom if passed an array with url of images
 * @param {[String]} sources [array containing the urls]
 * @param {[String]} domElements [array containing the DOM Elements on which to create the imgs ]
 */

function createElementsOnDom(sources, domElements) {

    let imageElements = '';

    for (let i = 0; i < sources.length; i++) {

        const source = sources[i];

        const imageElement = `<img src="${source}" alt="Picture number ${i + 1}">`;

        imageElements += imageElement;
    }

    for (let i = 0; i < domElements.length; i++) {

        const domElement = domElements[i];

        domElement.innerHTML = imageElements;
    }
}

/**
 *  Removes the active class from both the carousel and thumbnails pictures
 * @param {Number} index The index at which the elements to 'hide' are located in the array
 */

function displayPicture(index) {

    carouselPictures[index].classList.add('active');
    thumbnailPictures[index].classList.add('active');
}

/**
 *  Add the active class to both the carousel and thumbnails pictures
 * @param {Number} index The index at which the elements to 'show' are located in the array
 */

function hidePicture(index) {

    carouselPictures[index].classList.remove('active');
    thumbnailPictures[index].classList.remove('active');
}

