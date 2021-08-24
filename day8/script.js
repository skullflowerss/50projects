const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, i) =>{
            return`<span style="transition-delay:${i * 50}ms">${letter}</span>`
        })
        .join('')
})