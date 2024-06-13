let button = document.querySelector('#btn')
let text = document.querySelector('#text')

button.addEventListener('click', () => {
    text.classList.toggle('active')
});