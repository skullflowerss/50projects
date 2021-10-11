
const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const buttonUp = document.querySelector('.up-button')
const buttonBottom = document.querySelector('.down-button')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlide = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

buttonUp.addEventListener('click', ()=> changeSlide('up'))
buttonBottom.addEventListener('click', ()=> changeSlide('down'))

const changeSlide = (direction) =>{
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlide = (activeSlide+1)%slidesLength
    }
    else if(direction === 'down'){
        activeSlide--
        if(activeSlide < 0){
            activeSlide = slidesLength - 1
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlide * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlide * sliderHeight}px)`
}