'use strickt';

const prodInfo = document.getElementById('right');
const productsBlock = document.getElementById('center');
const buyButton = document.getElementById('buyButton');
const orderInput = document.forms.orderForm.elements;
const citiesBlock = document.getElementById('citiesBlock');
const saveBtn = document.getElementById('saveButton');
const orderBlock = document.getElementById('orderBlock');
const orderInfo = document.getElementById('orderInfo');

showCategories(categories);
createCities();

document.getElementById('left').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        prodInfo.style.display = 'none';
        orderBlock.style.display = 'none';
        const category = event.target.getAttribute('data-category');
        const categoryProducts = categories[category].products;
        showProducts(categoryProducts, category);
    }
});


document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        orderBlock.style.display = 'none';
        const productId = event.target.getAttribute('product-id');
        const categoryKey = event.target.getAttribute('data-category');

        const product = categories[categoryKey].products.find(product => product.id == productId);
        showProduct(product, categoryKey);
    }
});

buyButton.addEventListener('click', () => {
    alert(`You bought the product!`);
    orderBlock.style.display = 'block';
});

citiesBlock.addEventListener('change', event => {
    const cityValue = event.target.value;
    createPostStores(cityValue);
})

saveBtn.addEventListener("click", event => {
    if (!isValidSafe(orderInput)) {
        alert("invalid input");
        event.preventDefault();
    } else {
        const prodId = document.getElementById('prod-name').getAttribute('orderId');
        const cat = document.getElementById('prod-name').getAttribute('orderCategory');
        const product = categories[cat].products.find(product => product.id == prodId);
        const table = document.querySelector('table');
        table.innerHTML = '';
        tableCellsNumber = 2;

        const userInputObj = {
            'Product name': product.name,
            'Quantity:': orderInput.qty.value,
            'Final price': `${product.price}$ * ${orderInput.qty.value} = ${product.price * orderInput.qty.value}$`,
            'Customer\'s Name:': orderInput.firstname.value,
            'Customer\'s Middle Name:': orderInput.middleName.value,
            'Customer\'s Family Name:': orderInput.familyName.value,
            'Customer\'s City:': cities[orderInput.cities.value],
            'Nova Poshta Store No:': orderInput.posts.value,
            'Payment:': orderInput.pay.value,
            'Comment:': orderInput.comment.value,
        };

        createOrderTable(userInputObj, table, tableCellsNumber);

        prodInfo.style.display = 'none';
        orderBlock.style.display = 'none';
        productsBlock.style.display = 'none';
        orderInfo.style.display = 'block';
    };
});