/*
    5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
    Обязательно использовать оператор return.
 */

let x = Math.floor(Math.random() * 11);
let y = Math.floor(Math.random() * 11);

console.log(`x = ${x}\ty = ${y}\n=================================`)
console.log(`x + y = ${doAddition(x, y)}`)
console.log(`x - y = ${doSubtraction(x, y)}`)
console.log(`x * y = ${doMultiplication(x, y)}`)
console.log(`x / y = ${doDivision(x, y)}`)

function doAddition(a, b) {
    return a + b;
}

function doSubtraction(a, b) {
    return a - b;
}

function doMultiplication(a, b) {
    return a * b;
}

function doDivision(a, b) {
    return a / b;
}


