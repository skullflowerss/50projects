const api = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username){
    try{
        const { data } = await axios(api+username)
        creatUserCard(data) 
        getRepos(username)
        console.log(data)
    }catch(err){
        console.log(err)
        if(err.response.status == 404){
            createErrorCard('No profile with this username')
        }
        
    }
}

async function getRepos(username){
    try{
        const { data } = await axios(api+username + '/repos?sort=created')
        addRepos(data)
    }catch(err){
            createErrorCard('problem fetching repos')
    }
}

function createErrorCard(message){
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function creatUserCard(user){
    const { avatar_url, bio, name, followers, following, public_repos, login} = user

    const userName = name === null ? login : name
    const desc = bio === null ? 'Theres no bio' : bio
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${avatar_url}" alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userName}</h2>
            <p>${desc}</p>
            <ul>
                <li>${followers}<strong>Followers</strong></li>
                <li>${following}<strong>Following</strong></li>
                <li>${public_repos}<strong>REPOS</strong></li>
            </ul>
            <div id="repos">
            </div>
        </div>
    </div>
    `
    main.innerHTML = cardHTML
}

function addRepos(repos){
    const reposEl = document.getElementById('repos')
    repos.slice(0,10).forEach(repo =>{
        const repoEl = document.createElement('a')
        repoEl.classList.add('repos')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = search.value
    if(input){
        getUser(input)
        search.value = ''
    }
})