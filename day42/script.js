const result = document.getElementById('result')
const filter = document.getElementById('filter')

let list = []
const url = 'https://randomuser.me/api?results=20'

async function getData(){
    const res = await fetch(url)
    const { results } = await res.json()
    result.innerHTML = ''
    results.forEach(user =>{
        console.log(user)
        const li = document.createElement('li')
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}" />
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        list.push(li)
        result.appendChild(li)
    })
    
    
}

getData()

filter.addEventListener('input', (e) =>{
    let value = e.target.value
    list.forEach(item =>{
        let info = item.innerText.toLowerCase()
        if(info.includes(value.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
})