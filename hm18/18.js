let timer = 600; // пишите в секундах

let minutes = Math.floor(timer / 60);
let seconds = timer % 60;
let boxTimer = document.querySelector('.time');
let timerStart = ''

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');


showTimer(minutes, seconds);
function showTimer(minutes, seconds){
    let dial = ''
    if (minutes < 10){
        dial += '0' + minutes
    }else{
        dial += minutes;
    }
    dial += ':'
    if(seconds < 10){
        dial += '0' + seconds
    } else{
        dial += seconds;
    }
    boxTimer.innerHTML = dial;
}

function stopTimer(){
    startButton.disabled = false;
    clearInterval(timerStart);
}

function timerRun() {
    if (timer === 0) {
        stopTimer();
    } else {
        timer -= 1;
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        showTimer(minutes, seconds)
    }
}

startButton.addEventListener('click', () => {
    timerStart = setInterval(timerRun, 1000);
    startButton.disabled = true;
});

stopButton.addEventListener('click', stopTimer)
