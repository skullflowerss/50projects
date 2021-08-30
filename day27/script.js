const btn = document.querySelector('btn')

const toast = document.getElementById('toasts')

const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5'
];

button.addEventListener('click', ()=>{
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = messages[0]
    toast.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
})