let userNum = prompt('Write array! Use" "', '1 2 3 5 6 2')

let originalArray = translate_array(userNum)

function translate_array(num){
    let array = num.split(' ');
    if (array[array.length - 1] === '') {
        array.pop();
    }
    return array;
}

let filteredArray = originalArray.filter((number, index, array) => {
    return array.indexOf(number) !== array.lastIndexOf(number);
});

console.log(filteredArray);
