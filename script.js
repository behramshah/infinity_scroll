const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
const count = 30;
const accKey = 'mOTbnjr7X15I2Pm4OQLETG8PMVVui3-XWYsdF4cSdQI';
const api_Url = `https://api.unsplash.com/photos/random?client_id=${accKey}&count=${count}`;
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totatImages = 0;

function imageLoaded (){
    imagesLoaded++;
    if(imagesLoaded === totatImages){
        ready = true;
        loader.hidden = true;
    }
}

function displayImages () {
    totatImages = photosArray.length;
    photosArray.forEach(photo => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target','_blank');
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        img.addEventListener('load', imageLoaded);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getImages(){
    try {
        const response = await fetch(api_Url);
        photosArray = await response.json();
        displayImages();
    } catch(error) {
        console.error(error)
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1100 && ready){
        ready = false;
        imagesLoaded = 0;
        getImages();
    }
});

getImages();