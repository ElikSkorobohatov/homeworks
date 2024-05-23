{// Task 6.1
let sym = document.querySelector('#sym');

function hm61() {
    let user_num = prompt('Write your number!');
    let user_delete = prompt('What delete?');
    let numArray = Array.from(user_num);
    let deleteArray = Array.from(user_delete.replace(/\s+/g, ''));
    let resultArray = numArray.filter(item => !deleteArray.includes(item));
    let result_num = resultArray.join('');
    console.log(result_num);
}

sym.addEventListener('click', hm61);
}



{// Task 6.2

    //для понимаю напишу что данная функция переводит строку
    // в масив и если есть пробел в конце, уберает его
    function translate_array(num){
        let array = num.split(' ');
        if (array[array.length - 1] === '') {
            array.pop();
        }
        return array;
    }

    function user_arithmetic(array){
        let result = 0;
        let count = 0;
        let array_long = array.length;

        for (let i = 0; i < array_long; i++) {
            let num = +array[i];
            if (!isNaN(num)) {
                console.log(num);
                result += num;
                count++;
            }
        }

        console.log("Sum:", result);
        console.log("Count:", count);
        let average_result = result / count;
        return average_result;
    }

let arithmetic = document.querySelector('#arithmetic');

    function hm62() {
        let user_num = prompt("Enter array elements separated by spaces: ");
        user_num = translate_array(user_num);
        result = user_arithmetic(user_num)
        console.log("Arithmetic:", result);
    }
    arithmetic.addEventListener('click', hm62);
}

{// Task 6.3
    //для понимаю напишу что данная функция переводит строку
    // в масив и если есть пробел в конце, уберает его
    function trans_array(num){
        let array = num.split(' ');
        if (array[array.length - 1] === '') {
            array.pop();
        }
        return array;
    }

    function filter_array(array, num_delete){
        let result = array.filter(item => !num_delete.includes(item));
        return result;
    }

    let deletion = document.querySelector('#deletion');

    function hm63() {
        let user_num = prompt("Enter array elements separated by spaces: ");
        user_num = trans_array(user_num);
        console.log("Original array:", user_num);

        let user_delete = prompt('What delete?', '4');
        user_delete = trans_array(user_delete);
        console.log("Elements to delete:", user_delete);

        let result_array = filter_array(user_num, user_delete);
        console.log("Filtered array:", result_array);
    }
    deletion.addEventListener('click', hm63);
}