/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
 */


/**
 * Creating new product
 * @param id long
 * @param title string
 * @param price decimal
 * @constructor
 */
function Product(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
}

/**
 * Product list's Creating and filling
 * @type {{init(): void, capitalizeFirstLetter(*): *, createAddButton(*=): HTMLButtonElement, productListElement: HTMLElement, fillTableRow(*=): void, productCreating(): void, addProductsToList(): void, createRemoveButton(*=): HTMLButtonElement, products: any[]}}
 */
let productList = {
    productListElement: document.getElementById('catalog'),
    products: new Array(),

    init() {
        this.productCreating();
        this.addProductsToList();
    },

    productCreating() {
        this.products.push(new Product(1, "milk", 70));
        this.products.push(new Product(3, "potato", 50));
        this.products.push(new Product(2, "bread", 20));
        this.products.push(new Product(4, "tomato", 120));
        this.products.push(new Product(5, "fish", 200));
        this.products.push(new Product(6, "cucumber", 90));
        this.products.push(new Product(7, "cheese", 450));
        this.products.push(new Product(8, "carrot", 35));
        this.products.push(new Product(9, "watermelon", 20));
        this.products.push(new Product(10, "orange", 70));
        this.products.push(new Product(11, "lemon", 60));
    },

    addProductsToList() {
        for (let i = 0; i < this.products.length; i++) {
            this.fillTableRow(this.products[i], 100, 100);
        }
    },

    fillTableRow(content, width, height) {
        let productCard = document.createElement('div');
        productCard.className = 'productCard';

        let productCardImage = new Image(width, height);
        productCardImage.src = 'images/' + content.title + '.jpg';
        productCardImage.className ='productCard__img';

        let productCardTitle = document.createElement('h2')
        productCardTitle.className = 'productCard__title';
        productCardTitle.innerHTML = this.capitalizeFirstLetter(content.title);

        let productCardPrice = document.createElement('h2')
        productCardPrice.className = 'productCard__price';
        productCardPrice.innerHTML = content.price;

        productCard.append(productCardImage);
        productCard.append(productCardTitle);
        productCard.append(productCardPrice);
        productCard.append(this.createAddButton(content))
        productCard.append(this.createRemoveButton(content));

        this.productListElement.append(productCard);
    },

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    createAddButton(product) {
        let addBtn = document.createElement('button');
        addBtn.innerHTML = 'Add';
        addBtn.onclick = function () {
            basket.productAdding(product);
            basket.showBasket();
        };
        return addBtn;
    },

    createRemoveButton(product) {
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove';
        removeBtn.onclick = function () {
            basket.productRemoving(product);
            basket.showBasket();
        };
        return removeBtn;
    }
}


/**
 * There is basket for products.
 * Firstly, it's empty.
 * @type {{productAdding: basket.productAdding, amountCalculating: (function(): number), productList: *[], productRemoving: basket.productRemoving}}
 */
let basket = {
    basketDiv: document.getElementById('basket'),
    productList: new Map(),
    basketList: document.createElement('ol'),
    isListVisible: false,

    init() {
        this.basketList.style.visibility = 'hidden';
        this.showBasket();
        this.initEventHandler();
    },

    showBasket() {
        let image = new Image(40, 40);
        image.src = 'images/basket.png';

        let count = document.createElement('span');
        count.className = 'basketCount';

        count.innerHTML = basket.productCount();

        this.basketDiv.append(image);
        this.basketDiv.append(count);
        this.basketDiv.append(this.basketList);

        if (this.isListVisible) {
            this.showBasketList();
        }
    },

    initEventHandler() {
        this.basketDiv.addEventListener('click', event => {
            if (this.isListVisible) {
                this.basketList.style.visibility = 'hidden';
                this.isListVisible = false;
            } else {
                this.basketList.style.visibility = 'visible';
                this.isListVisible = true;
            }
            console.log(event.target);
            console.log(this.basketList);
            console.log(this.isListVisible);
            this.showBasket();
        })
    },

    productAdding: function addProduct(product) {
        if (productList.products.includes(product)) {
            if (this.productList.has(product)) {
                this.productList.set(product, this.productList.get(product) + 1);
            } else {
                this.productList.set(product, 1);
            }
        }
        this.showBasketList();
    },
    productRemoving: function removeProduct(product) {
        if (this.productList.has(product)) {
            if (this.productList.get(product) > 1) {
                this.productList.set(product, this.productList.get(product) - 1);
            } else {
                this.productList.delete(product);
            }
        }
        this.showBasketList();
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
    },

    showBasketList() {
        while(this.basketList.firstChild) {
            this.basketList.removeChild(this.basketList.firstChild);
        }

        this.productList.forEach(((value, key) => {
            let icon = new Image(50, 50);
            icon.src = 'images/' + key.title + '.jpg';

            let info = key.title + ': ' + key.price + ' x ' + value + ' = ' + key.price * value;

            let listElement = document.createElement('li');
            listElement.innerHTML = info;
            listElement.append(icon);

            this.basketList.append(listElement);
        }));
    }
}



productList.init();
basket.init();
