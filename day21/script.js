
function dragStart(){
    console.log('drag start')
    this.className+= ' hold'
    setTimeout(()=> this.className = ' invisible', 0)
}

function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault()
    console.log('drag over')
}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
    console.log('drag enter')
}

function dragLeave(){
    console.log('drag leave')
    this.className = ' empty'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}


const fill = document.querySelector('.fill')
const empty = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empty.forEach(box =>{
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
})