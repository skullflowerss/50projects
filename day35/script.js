const imgs = document.getElementById('imgs');
const left = document.getElementById('left')
const right = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let index = 0;

let interval = setInterval(run, 2000);
console.log(img)

function run(){
    index++;
    changeImage();
}

function changeImage(){
    console.log(index)
   if(index > img.length-1){
       console.log('yes')
       index = 0;
   }else if(index < 0){
       console.log('no')
       index = img.length - 1;
   }

    imgs.style.transform = `translateX(${-index * 400}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

right.addEventListener('click', ()=>{
    index++;
    changeImage()
    resetInterval()
})

left.addEventListener('click', ()=>{
    index--;
    changeImage()
    resetInterval()
})