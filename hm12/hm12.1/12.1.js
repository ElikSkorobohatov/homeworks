let siteUserBtn = document.querySelector('#site');
let goToSite = document.querySelector('#go');
let askSite = '';

siteUserBtn.addEventListener('click', () =>{
    askSite = prompt('Which site do you want to go to?', 'https://www.google.com');
})

goToSite.addEventListener('click', () =>{

    if (askSite){
        if (!askSite.startsWith('http://') && !askSite.startsWith('https://')) {
            askSite = 'http://' + askSite;
       } if (!askSite.endsWith('.com')&&!askSite.endsWith('.com/')) {
            askSite += '.com';
        }
        window.location.href = askSite;
    }
})