import { hideAd, copyAddress } from "../../app.js";

const baseUrl = "https://play.pixels.xyz/pixels/share/"; // Base URL to share view
const minRange = 1; // Minimun lands number
const maxRange = 5000; // Maximun lands number

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const leftFrame = document.getElementById("left_frame");
const rightFrame = document.getElementById("right_frame");

const leftLandID = document.querySelector('.left_landID');
const rightLandID = document.querySelector('.right_landID');

function randomsLand() {
    let leftID = randomNumber(minRange, maxRange);
    let rightID = randomNumber(minRange, maxRange);

    leftFrame.setAttribute('src',`${baseUrl}${leftID}`);
    leftLandID.textContent = `#${leftID}`

    rightFrame.setAttribute('src',`${baseUrl}${rightID}`);
    rightLandID.textContent = `#${rightID}`;
}

window.addEventListener('load', randomsLand);

const inputCodeLeft = document.getElementById('code-1');
const btnLeft = document.getElementById('search_btn-left');
const inputCodeRight = document.getElementById('code-2');
const btnRight = document.getElementById('search_btn-right');

btnLeft.addEventListener('click', () => {
    if(inputCodeLeft.value != '' || inputCodeLeft.value.length != 0) {
        leftFrame.setAttribute('src',`${baseUrl}${inputCodeLeft.value}`);
        leftLandID.textContent = `#${inputCodeLeft.value}`;
        inputCodeLeft.removeAttribute("placeholder");
    }else {
        inputCodeLeft.setAttribute("placeholder", "Enter a Land ID");
    }
});

btnRight.addEventListener('click', () => {
    if(inputCodeRight.value != '' || inputCodeRight.value.length != 0) {
        rightFrame.setAttribute('src',`${baseUrl}${inputCodeRight.value}`);
        rightLandID.textContent = `#${inputCodeRight.value}`;
        inputCodeRight.removeAttribute("placeholder");
    }else {
        inputCodeRight.setAttribute("placeholder", "Enter a Land ID");
    }
});


const rollButton = document.querySelector('.roll');
const diceImg = document.querySelector('.dice');

rollButton.addEventListener('click', () => {
    rollButton.classList.add('rotate');
    rollButton.setAttribute('disabled', 'disabled');
    randomsLand();

    setTimeout(() => {
        rollButton.classList.remove('rotate');
        rollButton.removeAttribute('disabled');
    }, 2500);
});

let roninIcon = document.getElementById('ronin');
let ad = document.querySelector('.ad');

roninIcon.addEventListener('click', copyAddress);