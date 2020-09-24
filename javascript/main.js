// Get the h1 tag
title = document.querySelector('h1');
titleDiv = document.querySelector('#title');
blackButton = document.querySelector('#blackButton');
redButton = document.querySelector('#redButton');
addButton = document.querySelector('#addButton');

// Do things to this tag
function redColor() {
    title.style.color = 'red';
}

function blackColor() {
    title.style.color = 'black';
}

function insert() {
    console.log("here");
    let p = document.createTextNode("UwU");
    let br = document.createElement('br');

    titleDiv.appendChild(p);
    titleDiv.appendChild(br);
}

blackButton.addEventListener('click', blackColor);
redButton.addEventListener('click', redColor);
addButton.addEventListener('click', insert);
