/*
    2. Продолжить работу с интернет-магазином:
        a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
        b. Реализуйте такие объекты.
        c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

// a на объект - Product

// b

/**
 * Product constructing
 * @param title {string}
 * @param price {number}
 * @constructor
 */
function Product(title, price) {
    this.title = title;
    this.price = price;
}

let product1 = new Product("milk", 70);
let product2 = new Product("bread", 20);
let product3 = new Product("potato", 50);
let product4 = new Product("tomato", 120);
let product5 = new Product("fish", 200);
let product6 = new Product("cucumber", 90);
let product7 = new Product("cheese", 450);
let product8 = new Product("parrot", 35);
let product9 = new Product("watermelon", 20);
let product10 = new Product("orange", 70);
let product11 = new Product("lemon", 60);

// аналог бд или любого инстанса для хранения списка продуктов
let products = new Array();
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
products.push(product9);
products.push(product10);
products.push(product11);

// c

/**
 * There is basket for products.
 * Firstly, it's empty.
 * @type {{productAdding: basket.productAdding, amountCalculating: (function(): number), productList: *[], productRemoving: basket.productRemoving}}
 */
let basket = {
    productList: [],
    productAdding: function addProduct(product) {
        if (products.includes(product)) {
            this.productList.push(product);
        }
    },
    productRemoving: function removeProduct(product) {
        if (this.productList.includes(product)) {
            let idx = this.productList.indexOf(product);
            this.productList.splice(idx, idx);
        }
    },
    amountCalculating: function countBasketPrice() {
        let result = 0;
        for (let i = 0; i < this.productList.length; i++) {
            result += this.productList[i].price;
        }
        return result;
    }
}

// пример использования
console.log(basket.productList);
console.log('-------------------------');
basket.productAdding(product5)
basket.productAdding(product6)
basket.productAdding(product7)
console.log(basket.productList);
console.log('-------------------------')
basket.productRemoving(product6)
console.log(basket.productList);
console.log('-------------------------')
console.log(basket.amountCalculating());


