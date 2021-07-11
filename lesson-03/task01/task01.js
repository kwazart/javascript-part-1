/*
    1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

// Решето Эратосфена

// начальную позицию также можно задать. первоначально - по умолчанию 2
function findEmptyNumbersByEratosthen(end, start = 2) {
    // работаем с массивом логических значений
    let numbers = new Array(end + 1);
    // первоначальное заполнение
    numbers.fill(true);
    // числа 0 и 1 не являются простыми
    numbers[0] = numbers[1] = false;

    while (start <= end) {
        let startSecond = 2;
        // ограничение на повторный проход всего массива. стремимся уйти от O(n^2)
        if (numbers[start]) {
            while (startSecond * start <= end) {
                numbers[start * startSecond] = false;
                startSecond++;
            }
        }
        start++;
    }

    let i = 0;
    // если значение true, значит индексом элемента является простое число
    while (i++ < numbers.length) {
        if (numbers[i]) {
            console.log(i);
        }
    }
}

findEmptyNumbersByEratosthen(200);
