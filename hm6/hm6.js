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

let arithmetic = document.querySelector('#arithmetic');

    function hm62() {
        let user_num = prompt("Enter array elements separated by spaces: ");

        let user_array = user_num.split(' ');

        let user_long = user_array.length;

        let result = 0;
        let count = 0;

        if (user_array[user_long - 1] === '') {
            user_array.pop();
        }

        for (let i = 0; i < user_long; i++) {
            let num = +user_array[i];

            if (!isNaN(num)) {
                console.log(num);
                result += num;
                count++;
            }
        }

        console.log("Sum:", result);
        console.log("Count:", count);
        console.log("Arithmetic:", result/count);
    }

    arithmetic.addEventListener('click', hm62);
}

{// Task 6.3

    let deletion = document.querySelector('#deletion');

    function hm63() {
        let user_num = prompt("Enter array elements separated by spaces: ");
        let user_array = user_num.split(' ');

        if (user_array[user_array.length - 1] === '') {
            user_array.pop();
        }
        console.log("Original array:", user_array);

        let user_delete = prompt('What delete?', '4');
        let user_delete_array = user_delete.split(' ');
        console.log("Elements to delete:", user_delete_array);

        let result_array = user_array.filter(item => !user_delete_array.includes(item));

        console.log("Filtered array:", result_array);
    }

    deletion.addEventListener('click', hm63);
}