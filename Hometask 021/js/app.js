const prodInfo = document.getElementById('right');
const productsBlock = document.getElementById('center');
const prodName = document.getElementById('prod-name');
const prodPrice = document.getElementById('prod-price');
const prodDesc = document.getElementById('prod-description');
const buyButton = document.getElementById('buyButton');
const orderInput = document.forms.orderForm.elements;// далее при получении данных из формы

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

        const product = categories[categoryKey].products.find(product => product.id == productId);
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

function createCities() {
    const parent = document.getElementById('citiesBlock');

    const selectElem = document.createElement('select');

    for (key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.id = 'city';
        option.textContent = cities[key];

        selectElem.appendChild(option);
    }

    parent.appendChild(selectElem);

}

createCities();

const citiesBlock = document.getElementById('citiesBlock');
citiesBlock.addEventListener('change', (event) => {
    const cityValue = event.target.value;
    createPostStores(cityValue);
})


function createPostStores(value) {
    const parent = document.getElementById('postsBlock');
    parent.innerHTML = '';
    const selectElem = document.createElement('select');
    const noCityText = document.createElement('p');
    
    for (key in posts) {
        if (value === key) {
            for (let i = 1; i <= posts[key]; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `No ${i}`;

                selectElem.appendChild(option);
            }
            parent.appendChild(selectElem);
        } else if (value === 'na') {
            noCityText.textContent = 'You doesn\'t choose the city!';
            parent.appendChild(noCityText);
        }
    }
}



