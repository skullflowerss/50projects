const contents = document.querySelectorAll('.content')
const menu = document.querySelectorAll('nav ul li')

menu.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[i].classList.add('show')
    })
})

function hideAllContents(){
    contents.forEach(content =>{
        content.classList.remove('show')
    })
}

function hideAllItems(){
    menu.forEach(item => item.classList.remove('active'))
}