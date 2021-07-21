/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
каталога генерируется JS.
 */

function Product(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
}

// аналог бд или любого инстанса для хранения списка продуктов
let products = new Array();
products.push(new Product(1, "milk", 70));
products.push(new Product(2, "bread", 20));
products.push(new Product(3, "potato", 50));
products.push(new Product(4, "tomato", 120));
products.push(new Product(5, "fish", 200));
products.push(new Product(6, "cucumber", 90));
products.push(new Product(7, "cheese", 450));
products.push(new Product(8, "parrot", 35));
products.push(new Product(9, "watermelon", 20));
products.push(new Product(10, "orange", 70));
products.push(new Product(11, "lemon", 60));

let productTable = document.getElementById('catalog');

function fillTableRow(content, type='th') {
    let tableRow = document.createElement('tr');

    let tableHeader1 = document.createElement(type);
    let tableHeader2 = document.createElement(type);
    let tableHeader3 = document.createElement(type);
    let tableHeader4 = document.createElement(type);

    tableHeader1.innerHTML = content == null ? 'id' : content.id;
    tableHeader2.innerHTML = content == null ? 'title' : content.title;
    tableHeader3.innerHTML = content == null ? 'price' : content.price;
    if (content != null) {
        tableHeader4.append(createAddButton(content));
        tableHeader4.append(createRemoveButton(content));
    } else {
        tableHeader4.innerHTML = '';
    }

    tableRow.append(tableHeader1);
    tableRow.append(tableHeader2);
    tableRow.append(tableHeader3);
    tableRow.append(tableHeader4);

    productTable.append(tableRow);
}

function addProductsToTable() {
    for (let i = 0; i < products.length; i++) {
        fillTableRow(products[i], 'td');
    }
}

function createAddButton(product) {
    let addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add';
    addBtn.onclick = function () {
        basket.productAdding(product);
        showBasket();
    };
    return addBtn;
}

function createRemoveButton(product) {
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.onclick = function () {
        basket.productRemoving(product);
        showBasket();
    };
    return removeBtn;
}

/**
 * There is basket for products.
 * Firstly, it's empty.
 * @type {{productAdding: basket.productAdding, amountCalculating: (function(): number), productList: *[], productRemoving: basket.productRemoving}}
 */
let basket = {
    productList: new Map(),
    productAdding: function addProduct(product) {
        if (products.includes(product)) {
            if (this.productList.has(product)) {
                this.productList.set(product, this.productList.get(product) + 1);
            } else {
                this.productList.set(product, 1);
            }
        }
    },
    productRemoving: function removeProduct(product) {
        if (this.productList.has(product)) {
            if (this.productList.get(product) > 1) {
                this.productList.set(product, this.productList.get(product) - 1);
            } else {
                this.productList.delete(product);
            }
        }
    },
    amountCalculating: function countBasketPrice() {
        let result = 0;
        this.productList.forEach(((value, key) => {
            result += key.price * value;
        }));
        return result;
    },
    productCount: function productCount() {
        let count = 0;
        this.productList.forEach((value => {
            count += value;
        }));
        return count;
    }
}

function showBasket() {
    let basketDiv = document.getElementById('basket');
    if (basket.amountCalculating === 0) {
        basketDiv.innerHTML = 'Basket is empty';
    } else {
        basketDiv.innerHTML = 'В корзине: ' + basket.productCount() +' товаров на сумму ' + basket.amountCalculating() + ' рублей';
    }
}

fillTableRow(null);
addProductsToTable();
showBasket();
