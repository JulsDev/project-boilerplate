import corgi from './corgi.jpeg';

function addImage() {
    // Inside this function I will create an img dom element, specify an alt , width , and src properties.
    const img = document.createElement('img');
    img.alt = 'corgi';
    img.width = 300;
    img.src = corgi;
    const body = document.querySelector('body');
    body?.appendChild(img);
}

export default addImage;