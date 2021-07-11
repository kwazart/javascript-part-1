/*
    2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
    сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
    зависимости от находящихся в ней товаров.
 */

// тестовая мапа. аналог бд или любого инстанса для хранения списка продуктов
let products = new Map();
products.set("milk", 70);
products.set("bread", 20);
products.set("potato", 50);
products.set("tomato", 120);
products.set("fish", 200);
products.set("cucumber", 90);
products.set("cheese", 450);
products.set("parrot", 35);
products.set("watermelon", 20);
products.set("orange", 70);
products.set("lemon", 60);

let basket = new Array(); // можно и в мапе хранить. но по теме урока вроде массивы

function addProduct(product) {
    if (products.has(product)) {
        basket.push(product);
    }
}

function removeProduct(product) {
    if (products.has(product)) {
        let idx = basket.indexOf(product);
        basket.splice(idx, idx);
    }
}

function countBasketPrice() {
    let result = 0;
    for (let i = 0; i < basket.length; i++) {
        result += products.get(basket[i]);
    }
    return result;
}

// пример использования
console.log(basket);
console.log('-------------------------')
addProduct('fish');
addProduct('milk');
addProduct('cheese');
console.log(basket);
console.log('-------------------------')
removeProduct('milk')
console.log(basket);
console.log('-------------------------')
console.log(countBasketPrice());