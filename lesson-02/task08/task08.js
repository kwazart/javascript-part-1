/*
    8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
    где val – заданное число, pow – степень.
 */

function doPow(val, pow) {
    if (pow == 0 || val == 1) {
        return 1;
    } else {
        if (pow > 0) {
            return val * doPow(val, --pow);
        } else {
            return 1 / val * doPow(val, ++pow);
        }
    }
}

console.log(doPow(3, 3));
console.log(doPow(4, 2));
console.log(doPow(4, 4));
console.log(doPow(4, 0));
console.log(doPow(4, 1));

console.log(doPow(3, -3));
console.log(doPow(4, -2));
console.log(doPow(4, -4));
console.log(doPow(4, 0));
console.log(doPow(4, -1));