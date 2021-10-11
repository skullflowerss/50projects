const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
console.log(profile_img)
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')


function getData(){
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60" alt="">`;
    title.innerHTML = 'Lorem ipsum dolor sit'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur labore cum reprehenderit voluptatum perspiciatis, ipsum facere beatae odio, eaque quam tempora ipsam error quasi modi neque necessitatibus ducimus velit.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>'
    name.innerHTML="John"
    date.innerHTML="Oct 08, 2020"

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}

setTimeout(getData, 2500)