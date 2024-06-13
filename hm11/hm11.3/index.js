    let tablet = document.querySelector('.tablet');
    let btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        let randomNumber = Math.floor((Math.random() * 10)) || 1; // если попадаеться 0, то пишем 1 :)
        let newImg = document.createElement('img');
        newImg.src = `icon/${randomNumber}.jpg`;
        tablet.innerHTML = '';
        tablet.appendChild(newImg);
    });