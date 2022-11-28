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

////////PARALLAX////////


window.onload = () => {

    const container = document.querySelector('.container');

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

//Коэффициенты сдвига фото (на сколько сдвиг)

    const forCoffeeStand = 100;
    const forCoffeeStandStripes = 40;
    const forCone = 20;
    const forGlass = 25;
    const forLittleCone = 23;
    const forLongStickLightPink = 99;
    const forLongStickLightPinkOne = 80;
    const forLongStickDark = 90;
    const forMiddleBall = 85;
    const forSemicircle = 20;
    const forTheBall = 90;
    const forTheBigBall = 30;
    const forVioletCone = 35;

//Скорость анимации, плавность при сдвиге

    const speed = 0.15;

    //Начальное значение

    let positionX = 0, positionY = 0;
    let cordXPercentages = 0, cordYPercentages = 0;

    //Анимация движения фото

    function mouseParallaxStyle() {
        const distX = cordXPercentages - positionX;
        const distY = cordYPercentages - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY + speed);
        //Передать стили фоток в css


        coffeeStand.style.cssText = `transform:translate(${positionX / forCoffeeStand}%,${positionY / forCoffeeStand}%);`;

        coffeeStandStripes.style.cssText = `transform:translate(${positionX / forCoffeeStandStripes}%,${positionY / forCoffeeStandStripes}%);`;
        cone.style.cssText = `transform:translate(${positionX / forCone}%,${positionY / forCone}%);`;
        glass.style.cssText = `transform:translate(${positionX / forGlass}%,${positionY / forGlass}%);`;
        littleCone.style.cssText = `transform:translate(${positionX / forLittleCone}%,${positionY / forLittleCone}%);`;
        longStickLightPink.style.cssText = `transform:translate(${positionX / forLongStickLightPink}%,${positionY / forLongStickLightPink}%);`;
        longStickLightPinkOne.style.cssText = `transform:translate(${positionX / forLongStickLightPinkOne}%,${positionY / forLongStickLightPinkOne}%);`;
        longStickDark.style.cssText = `transform:translate(${positionX / forLongStickDark}%,${positionY / forLongStickDark}%);`;
        middleBall.style.cssText = `transform:translate(${positionX / forMiddleBall}%,${positionY / forMiddleBall}%);`;
        semicircle.style.cssText = `transform:translate(${positionX / forSemicircle}%,${positionY / forSemicircle}%);`;
        theBall.style.cssText = `transform:translate(${positionX / forTheBall}%,${positionY / forTheBall}%);`;
        theBigBall.style.cssText = `transform:translate(${positionX / forTheBigBall}%,${positionY / forTheBigBall}%);`;
        violetCone.style.cssText = `transform:translate(${positionX / forVioletCone}%,${positionY / forVioletCone}%);`;

        requestAnimationFrame(mouseParallaxStyle);
    }

    mouseParallaxStyle();

    container.addEventListener('pointermove', (e) => {
        //При изменчивости разрешения эркана
        const parallaxWidth = container.offsetWidth;
        const parallaxHeight = container.offsetHeight;

        //Ноль по середине, откуда идёт сам сдвиг
        const cordX = e.pageX - parallaxWidth / 2;
        const cordY = e.pageY - parallaxHeight / 2;

        //Получаем значение не в px а в %

        cordXPercentages = cordX / parallaxWidth * 100;
        cordYPercentages = cordY / parallaxHeight * 100;


    })
}


