'use strict';

const prodInfo = document.getElementById('right');
const productsBlock = document.getElementById('center');
const buyButton = document.getElementById('buyButton');
const orderInput = document.forms.orderForm.elements;
const citiesBlock = document.getElementById('citiesBlock');
const saveBtn = document.getElementById('saveButton');
const orderBlock = document.getElementById('orderBlock');
const orders = document.getElementById('orders');
orders.classList.add('hidden');
const ordersButton = document.getElementById('ordersButton');
let ordersArray = []; 

showCategories(categories);
createCities();

document.getElementById('left').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        prodInfo.style.display = 'none';
        orderBlock.style.display = 'none';
        orders.classList.add('hidden');
        const category = event.target.getAttribute('data-category');
        const categoryProducts = categories[category].products;
        showProducts(categoryProducts, category);
    }
});


document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        orderBlock.style.display = 'none';
        orders.classList.add('hidden');
        const productId = event.target.getAttribute('product-id');
        const categoryKey = event.target.getAttribute('data-category');
        const product = categories[categoryKey].products.find(product => product.id == productId);
        showProduct(product, categoryKey);
    }
});

buyButton.addEventListener('click', () => {
    orderBlock.style.display = 'block';
    orders.classList.add('hidden');
});

citiesBlock.addEventListener('change', event => {
    const cityValue = event.target.value;
    createPostStores(cityValue);
});

saveBtn.addEventListener("click", event => {
    orders.classList.add('hidden');
    if (!isValidSafe(orderInput)) {
        event.preventDefault();
    } else {
        const prodId = document.getElementById('prod-name').getAttribute('orderId');
        const cat = document.getElementById('prod-name').getAttribute('orderCategory');
        const product = categories[cat].products.find(product => product.id == prodId);

        const userInputObj = {
            productName: {
                tableKey: 'Product:', 
                tableValue: product.name,
            },
            quantity: {
                tableKey: 'Quantity:', 
                tableValue: orderInput.qty.value,
            },
            productPrice: {
                tableKey: 'Product Price:',
                tableValue: `${product.price}$`,
            },
            finalPrice: {
                tableKey: 'Final price:',
                tableValue: `${product.price * orderInput.qty.value}$`,
            },
            customerName: {
                tableKey: 'Customer\'s Name:',
                tableValue: orderInput.firstname.value,
            },
            customerMidName: {
                tableKey: 'Customer\'s Middle Name:',
                tableValue: orderInput.middleName.value,
            },
            customerFamName: {
                tableKey: 'Customer\'s Family Name:',
                tableValue: orderInput.familyName.value,
            },
            customerCity: {
                tableKey: 'Customer\'s City:', 
                tableValue: cities[orderInput.cities.value],
            },
            customerPost: {
                tableKey: 'Nova Poshta Store No:',
                tableValue: orderInput.posts.value,
            },
            payment: {
                tableKey: 'Payment:',
                tableValue: orderInput.pay.value,
            },
            comment: {
                tableKey: 'Comment:',
                tableValue: orderInput.comment.value,
            },
            date: {
                tableKey: 'Date:', 
                tableValue: getOrderDate(),
            },
        };
        
        ordersArray.push(userInputObj);
        localStorage.setItem('orders', JSON.stringify(ordersArray));
        orders.innerHTML = '';
        ordersUpdate();

        prodInfo.style.display = 'none';
        orderBlock.style.display = 'none';
        productsBlock.style.display = 'none';
        orders.classList.add('hidden');
    };
});

window.addEventListener('load', () => {
    ordersArray = JSON.parse(localStorage.getItem('orders')) || [];
    ordersUpdate();
});

ordersButton.addEventListener('click', () => {
    productsBlock.style.display = 'none';
    prodInfo.style.display = 'none';
    orderBlock.style.display = 'none';
    if (ordersArray.length < 1) {
        orders.textContent = 'You don\'t have any orders!';
    };

    if (orders.className === 'hidden') {
        orders.classList.remove('hidden');
    } else {
        orders.classList.add('hidden');
    };
});

orders.addEventListener('click', (event) => {
    if (event.target.nodeName === 'P') {
        const element = event.target.nextElementSibling;
        if (element.classList != 'hidden') {
            element.classList.add('hidden');
        } else {
            element.classList.remove('hidden');
        };
    };
});