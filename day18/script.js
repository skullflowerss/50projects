const body = document.body;
const slides = document.querySelectorAll('.slide');

const right = document.getElementById('right');
const left = document.getElementById('left');

let activeSlide = 0;


function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

setBgToBody()

function setActiveSlide(){
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}


right.addEventListener('click', ()=>{
    activeSlide = (activeSlide + 1) % slides.length
    setBgToBody()
    setActiveSlide()
})

left.addEventListener('click', ()=>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})