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







