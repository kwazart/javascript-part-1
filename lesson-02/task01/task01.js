/*
    1. Дан код. Почему код даёт именно такие результаты?
 */

var a = 1, b = 1, c, d;

// сначала инкрементируем A. получаем 2. затем это значение присваиваем в C. итого: a = 2, c = 2
c = ++a; alert(c); // 2

// сначала присваиваем в D значение из B. затем инкрементируем b. итого: d = 1, b = 2
d = b++; alert(d); // 1

// сначала инкрементируем A. (было 2, стало 3). прибавляем 2 + 3, результат присваиваем в C. итого: a = 3, c = 5
c = (2+ ++a); alert(c); // 5

// сначала прибалвяем к двум значение из B. результат присвиваем в D. т.е. 2 + 2 = 4. затем инкрементируем B. итого: d = 4, b = 3
d = (2+ b++); alert(d); // 4

alert(a); // 3
alert(b); // 3