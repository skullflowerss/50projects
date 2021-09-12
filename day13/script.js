const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7bf9c30e47cbf8a8b74ae50a1e39d21e&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const form = document.getElementById('form')
const search = document.getElementById('search')

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

getMovies(API_URL)


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=7bf9c30e47cbf8a8b74ae50a1e39d21e&query=${searchTerm}&page=1`
        getMovies(SEARCH_URL)
        search.value = ''
    }else{
        window.location.reload()
    }
})

const main = document.getElementById('main')

function showMovies(results){
    main.innerHTML = ''
    results.forEach(result =>{
        const {title, poster_path, vote_average, overview } = result
        const El = document.createElement('div')
        El.classList.add('movie')
        El.innerHTML=`
            <img src="${IMG_PATH}${poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
            `
        main.appendChild(El)
    })
}

function getClassRate(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}