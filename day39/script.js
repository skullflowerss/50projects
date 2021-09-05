const password = document.getElementById('password')
const background = document.getElementById('background')
console.log(password)

password.addEventListener('input', (e)=>{
    const value = e.target.value
    const length = value.length
    background.style.filter = `blur(${ 20 - length }px)`
})