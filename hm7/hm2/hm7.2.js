let userNumFirst = prompt('Write Your first num!');
let userNumSecond = prompt('Write Your second num!');

function addNum (first){
    return (second) =>{
        return first * second;
    }
}

console.log(userNumFirst + ' * '+userNumSecond+ ' = '+addNum(userNumFirst)(userNumSecond));
