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
        const user_num = [1, 2, 3, 4, '5', 6, '7', 8, 9, '10c', 'rw'];
        const user_long = user_num.length;
        const dataType = 'number';
        let result = 0;
        let count = 0;

        for (let i = 0; i < user_long; i++) {
            if (typeof +user_num[i] === dataType && !isNaN(user_num[i])) {
                result += +user_num[i];
                count++;
            }
        }

        console.log("Аrithmetical mean:", result / count );
    }
arithmetic.addEventListener('click', hm62);
}

{// Task 6.3

    let deletion = document.querySelector('#deletion');

    function hm63() {
        const user_num = [1, 2, 3, 4, 5, 6];
        const user_delete = 4;

        let result_num = user_num.filter(item => item !== user_delete);

        console.log(result_num);
    }

    deletion.addEventListener('click', hm63);
}