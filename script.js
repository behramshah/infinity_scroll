const count = 10;
const accKey = 'mOTbnjr7X15I2Pm4OQLETG8PMVVui3-XWYsdF4cSdQI';
const api_Url = `https://api.unsplash.com/photos/random?client_id=${accKey}&count=${count}`;

async function getImages(){
    try {
        const response = await fetch(api_Url);
        const data = await response.json();
        console.log(data)
    } catch(error) {
        console.error(error)
    }
}

//getImages();