/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических
операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */

function doAddition(a, b) { return a + b; }
function doSubtraction(a, b) { return a - b; }
function doMultiplication(a, b) { return a * b; }
function doDivision(a, b) { return a / b; }


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return doAddition(arg1, arg2);
            break;
        case '-':
            return doSubtraction(arg1, arg2);
            break;
        case '*':
            return doMultiplication(arg1, arg2);
            break;
        case '/':
            return doDivision(arg1, arg2);
            break;
        default:
            return null;
    }
}

a = 2;
b = 4;
console.log(mathOperation(a, b, '+'));
console.log(mathOperation(a, b, '-'));
console.log(mathOperation(a, b, '*'));
console.log(mathOperation(a, b, '/'));