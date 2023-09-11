const prodInfo = document.getElementById('right');
const productsBlock = document.getElementById('center');
const prodName = document.getElementById('prod-name');
const prodPrice = document.getElementById('prod-price');
const prodDesc = document.getElementById('prod-description');
const buyButton = document.getElementById('buyButton');

showCategories(categories);

function showCategories(cat) {
    const parentElement = document.getElementById('left');

    for (let categoryKey in cat) {
        const category = cat[categoryKey];

        let element = document.createElement('div');
        element.textContent = category.name;
        element.setAttribute('data-category', categoryKey);
        parentElement.appendChild(element);
    }
}

document.getElementById('left').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        prodInfo.style.display = 'none';
        const category = event.target.getAttribute('data-category');
        const categoryProducts = categories[category].products;
        showProducts(categoryProducts, category);
    }
});

function showProducts(products, cat) {
    const parentElement = document.getElementById('center');
    parentElement.innerHTML = '';
    productsBlock.style.display = 'block';

    for (let product of products) {
        let element = document.createElement('div');
        element.textContent = `${product.name} ${product.price}$`;
        element.setAttribute('product-id', product.id);
        element.setAttribute('data-category', cat);
        
        parentElement.appendChild(element);
    }
}

document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const productId = event.target.getAttribute('product-id');
        const categoryKey = event.target.getAttribute('data-category');

        const product = categories[categoryKey].products.find(product => product.id == productId );
        showProduct(product);
    }
});

function showProduct(prod) {
    prodInfo.style.display = 'block';
    prodName.textContent = prod.name;
    prodPrice.textContent = `Price: ${prod.price}$`;
    prodDesc.textContent = `Description: ${prod.description}`;
}

buyButton.addEventListener('click', () => {
    alert(`You bought the product!`);
    prodInfo.style.display = 'none';
    productsBlock.style.display = 'none';
});