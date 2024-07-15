class Calculator{
    add(a, b){
        return a + b;
    }
    subtract(a, b){
        return a - b;
    }
    multiply (a, b){
        return a * b;
    }
    divide(a, b){
        if (b === 0){
            return "Error"
        } else {
            return a / b
        }
    }
}

const calc = new Calculator();
console.log(calc.add(5, 0));
console.log(calc.subtract(10, 1));
console.log(calc.multiply(3, 5));
console.log(calc.divide(8, 2));