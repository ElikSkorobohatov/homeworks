// Task 3.1

let num= 30;
let str = '20';
let bool = true;
let nul = null;
let und;
let obj = {x:0,y:0};
let arr = [1,2,3,4,5,6,7,8,9,10];

function fun(){
    let a = +str+num;
    console.log(a);
}

let btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',()=>{
        if (btns[i].id == "num"){
            console.log(typeof num);
            alert('Type is a ' + typeof num);
        }
        if (btns[i].id == "srt"){
            console.log(typeof str);
            alert('Type is a ' + typeof str);
        }
        if (btns[i].id == "bool"){
            console.log(typeof bool);
            alert('Type is a ' + typeof bool);
        }
        if (btns[i].id == "null"){
            if(nul === null){
                console.log('null');
                alert('Type is a null');
            }
            else {
                console.log("mitaiks");
            }
        }
        if (btns[i].id == "und"){
            console.log(typeof und);
            alert('Type is a ' + typeof und);
        }
        if (btns[i].id == "obj"){
            console.log(typeof obj);
            alert('Type is a ' + typeof obj);
        }
        if (btns[i].id == "arr"){
            if (Array.isArray(arr)) {
                console.log('array');
                alert('Type is an array');
            } else {
                console.log("mitaiks");
            }
        }
        if (btns[i].id == "fun"){
            console.log(typeof fun);
            alert('Type is a ' + typeof fun);
        }
    })
}

// Task 3.2

let task32 = document.getElementById('pro');
task32.addEventListener("click", function (){
    let line1 = prompt('Write something!')
    let line2 = prompt('Write something!')
    let line3 = prompt('Write something!')
    console.log(line1 + ' ' + line2 +  ' ' +line3)
    alert(line1 + ' ' + line2 +  ' ' +line3)
});

// Task 3.3

const fiveNum = 10369;

let task33 = document.getElementById('exp');
let result = fiveNum.toString();
task33.addEventListener("click", function (){
    alert('You wrote next: ' + result.split('').join(' ') + '.');
    console.log(result.split('').join(' ') + '.');
});