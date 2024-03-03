let baseUrl = "https://play.pixels.xyz/pixels/share/";
let minRange = 1;
let maxRange = 5000;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let leftFrame = document.getElementById("left_frame");
let rightFrame = document.getElementById("right_frame");

function randomsLand() {
    leftFrame.setAttribute('src',`${baseUrl}${randomNumber(minRange, maxRange)}`);
    rightFrame.setAttribute('src',`${baseUrl}${randomNumber(minRange, maxRange)}`);
}

window.addEventListener('load', randomsLand);