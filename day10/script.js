const joke = document.getElementById('joke')
const btn = document.getElementById('joke-btn')

function generateJoke(){
    const config ={
        headers:{
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then(data =>{
        joke.innerHTML = data.joke
    })
}
generateJoke()

btn.addEventListener('click', generateJoke)