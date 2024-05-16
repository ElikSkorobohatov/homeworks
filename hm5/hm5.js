//task 5.1
let Output = document.getElementById("Output");

function hm51(){
    for ( let i = 20; i <= 30; i += 0.5){
        console.log(i + '; ');
    }
}

Output.addEventListener('click', hm51);

//task 5.2

let calcul52 = document.getElementById('calcul');

let curs = 26;
let realCurs = 39;

function hm52(){
    for ( let i = 10; i <= 100; i += 10){
        console.log(i + '$ = ' + (i * curs) + ' грн (в мріях :) ); ');
        console.log(i + '$ = ' + (i * realCurs) + ' грн (на яву :) ); ');
    }
}

calcul52.addEventListener("click", hm52)

//task 5.3

let findNum53 =  document.getElementById('findNum');


let truNum = [];

function hm53(){
    let userNum = prompt('Please, enter Your number!', '12')
    for (let i= 1; i <= 100; i++){
        if(userNum >= i ** 2){
            truNum.push(i);
            console.log(userNum + ' >= ' + i + '^2 ');
        }
    }
    console.log(truNum.join('; '));
}

findNum53.addEventListener('click', hm53)

//task 5.4

let primeNum = document.getElementById('prime')


function hm54() {
    let userNum = prompt('Please, enter Your number!', '12')
    let counter = 0;
    for (let i= 1; i <= userNum; i++){
        if(userNum % i === 0){
            counter++;
        }
    }
    if(counter === 2||counter === 1){
        console.log(userNum + ' - is a simple number');
    } else {
        console.log(userNum + " - isn't simple number");
    }
}

primeNum.addEventListener('click', hm54)