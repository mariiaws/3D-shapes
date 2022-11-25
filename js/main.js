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

//Parallax

let container = document.querySelector('.container');

let coffeeStand = document.querySelector('.coffee-stand');
let coffeeStandStripes = document.querySelector('.coffee-stand-stripes');
let cone = document.querySelector('.cone');
let glass = document.querySelector('.glass');
let littleCone = document.querySelector('.little-cone');
let longStickLightPink = document.querySelector('.long-stick-light-pink-zero');
let longStickLightPinkOne = document.querySelector('.long-stick-light-pink-one');
let longStickDark = document.querySelector('.long-stick-dark');
let middleBall = document.querySelector('.middle-ball');
let semicircle = document.querySelector('.semicircle');
let theBall = document.querySelector('.the-ball');
let theBigBall = document.querySelector('.the-big-ball');
let violetCone = document.querySelector('.violet-cone');





container.addEventListener('pointermove', function () {
console.log('pointermove');


    

})

