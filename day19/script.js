const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "Something";

let index = 0;
let speed = 300 / speedEl.value;

writeText()

function writeText(){
    textEl.innerText = text.slice(0,index);
    index = (index + 1)%text.length;

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)