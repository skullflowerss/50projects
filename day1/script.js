const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        console.log(123)
        removeActiveClasses()
        panel.classList.add('active')
    })
    panel.addEventListener('mouseleave', ()=>{
        removeActiveClasses()
    })
})

function removeActiveClasses(){
    panels.forEach((x)=>{
        x.classList.remove('active')
    })
}

