"use strict"

let hamburger = document.querySelector('.hamburger');
let navWrapper = document.querySelector('.nav-wrapper');
let lineTop = document.querySelector('.line-top');
let lineMiddle = document.querySelector('.line-middle');
let lineBottom = document.querySelector('.line-bottom');

hamburger.addEventListener('click', function () {
    if (navWrapper === 'flex') {
        navWrapper = document.querySelector('.nav-wrapper').style.display = 'none';

    } else {
        navWrapper = document.querySelector('.nav-wrapper').style.display = 'flex';
    }


    lineTop.classList.toggle('line-top__animate');
    lineMiddle.classList.toggle('line-middle__animate');
    lineBottom.classList.toggle('line-bottom__animate');

    console.log('click')

})


//animation long stick

let container = document.querySelector(".container");
let ball = document.querySelector(".stick-one");

let maxX = container.clientWidth - ball.offsetWidth;
let maxY = container.clientHeight - ball.offsetHeight;

let size = 30;
let start = null;
let duration = 1;

function step(timestamp) {
    let progress, x, y;
    if (start === null) start = timestamp;

    progress = (timestamp - start) / duration / 2000;

    x = progress * maxX / size;
    y = 2 * Math.sin(x);

    ball.style.left = Math.min(maxX, size * x) + "px";
    ball.style.top = maxY / 2 + (size * y) + "px";

    if (progress >= 1) start = null;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);