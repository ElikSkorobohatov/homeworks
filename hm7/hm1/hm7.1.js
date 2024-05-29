
    let result = 0;
    let addFunction = true;

    function userEnter(num) {
        num = prompt('Write your number!', '2');
        if (num === null) {
            return false;
        } else {
            return function add() {
                result += Number(num);
                return result;
            }
        }
    }

    while (addFunction) {
        let userNum
        let addFunction = userEnter(userNum);
        console.log(addFunction());
    }