function sum() {
    let result = 0;

    return function(num) {
        result += num;
        return result;
    }
}

const add = sum();

console.log(add(4));
console.log(add(6));
console.log(add(10));
console.log(add(7));
