const testimonialsContainer = document.querySelector('.user-testimonial')
let testimonials = []
let person = 0;

async function fetchData(){
    const res = await fetch('https://testimonialapi.toolcarton.com/api')
    const data = await res.json()
    setData(data)
}

function setData(data){
    testimonials = data
    let user = testimonials[person]
    testimonialsContainer.innerHTML = `
    <p class="testimonial">
        ${user.message}
        </p>
        <div class="user">
            <img src="${user.avatar}" alt="" class="user-image">
            <div class="user-details">
                <h4 class="username">${user.name}</h4>
                <p class="role">${user.designation}</p>
            </div>
        </div>
    </div>
    `;
}
fetchData()

function update(){
    person = (person + 1) % testimonials.length;
    let user = testimonials[person]
    console.log(user)
    testimonialsContainer.innerHTML = `
    <p class="testimonial">
        ${user.message}
        </p>
        <div class="user">
            <img src="${user.avatar}" alt="" class="user-image">
            <div class="user-details">
                <h4 class="username">${user.name}</h4>
                <p class="role">${user.designation}</p>
            </div>
        </div>
    </div>
    `;
    
}

setInterval(update, 10000);