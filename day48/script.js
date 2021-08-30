const url = "https://source.unsplash.com/random/";
const constainer = document.querySelector('.container')
const rows = 10

for(let i = 0; i < 10; i++){
    const img = document.createElement('img')
    img.src =`${url}${getSize()}`
    constainer.appendChild(img)
}


function getSize(){
    return `${getNumber()}x${getNumber()}`
}
function getNumber(){
    return Math.floor(Math.random() * 10) + 300
}