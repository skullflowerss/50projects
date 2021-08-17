const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentactive = 1;

next.addEventListener('click', ()=>{

    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    currentactive++;
    console.log(currentactive)
    update()
})

prev.addEventListener('click', ()=>{
    if(currentactive < 1){
        currentactive = 1;
    }
    currentactive--;
    console.log(currentactive)
    update()
})

function update(){
    circles.forEach((x,i)=>{
        if(i < currentactive){
            x.classList.add('active')
        }else{
            x.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    const w = ((actives.length - 1)/(circles.length - 1)) * 100;
    progress.style.width = w + '%';
    if(currentactive === 1){
        prev.disabled = true
    }else if(currentactive === circles.length){
        
        next.disabled = true;
    }else{
        prev.disabled= false;
        next.disabled = false;
    }
}