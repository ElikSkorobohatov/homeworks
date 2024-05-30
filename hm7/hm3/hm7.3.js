
    function check(num, counter){
        if (num >= 100){
            return true;
        }
        else if (counter === 10){
            return true;
        }
        else{
            return false;
        }
    }

for (let count= 1; count <= 10; count++){
    let funCheck = prompt('Enter a number more 100!', '100');
    if(check(funCheck, count)){
        console.log(funCheck);
        break;
    }
}
