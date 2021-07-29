/*
    1. Написать функцию, преобразующую число в объект.
    Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих
    свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект:
    {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
    сообщение с помощью console.log и вернуть пустой объект.
 */

function convertIntToObject(number) {
    if (number > 999 || number < 0) {
        console.log(`Число ${number} не входит в диапазон 0-999`)
        return null;
    }

    let numberObject = {
        units: number % 10,
        dozens: Math.floor((number % 100) / 10),
        hundreds: Math.floor(number / 100)
    }

    // на русском
    // let numberObject = {
    //     единицы: number % 10,
    //     десятки: Math.floor((number % 100) / 10),
    //     сотни: Math.floor(number / 100)
    // }

    return numberObject;
}

console.log(convertIntToObject(245));
console.log(convertIntToObject(1245));
console.log(convertIntToObject(-245));