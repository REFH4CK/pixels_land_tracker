const baseUrl = "https://play.pixels.xyz/pixels/share/"; // Base URL to share view
const minRange = 1; // Minimun lands number
const maxRange = 5000; // Maximun lands number

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const leftFrame = document.getElementById("left_frame");
const rightFrame = document.getElementById("right_frame");

function randomsLand() {
    leftFrame.setAttribute('src',`${baseUrl}${randomNumber(minRange, maxRange)}`);
    rightFrame.setAttribute('src',`${baseUrl}${randomNumber(minRange, maxRange)}`);
}

window.addEventListener('load', randomsLand);

const inputCodeLeft = document.getElementById('code-1');
const btnLeft = document.getElementById('search_btn-left');
const inputCodeRight = document.getElementById('code-2');
const btnRight = document.getElementById('search_btn-right');

btnLeft.addEventListener('click', () => {
    leftFrame.setAttribute('src',`${baseUrl}${inputCodeLeft.value}`);
});

btnRight.addEventListener('click', () => {
    rightFrame.setAttribute('src',`${baseUrl}${inputCodeRight.value}`);
});

