'use strict';

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

function showProduct(prod, cat) {
    const prodName = document.getElementById('prod-name');
    const prodPrice = document.getElementById('prod-price');
    const prodDesc = document.getElementById('prod-description');
    prodInfo.style.display = 'block';
    prodName.textContent = prod.name;
    prodName.setAttribute('orderCategory', cat);
    prodName.setAttribute('orderId', prod.id);
    prodPrice.textContent = `Price: ${prod.price}$`;
    prodDesc.textContent = `Description: ${prod.description}`;
}

function createCities() {
    const parent = document.getElementById('citiesBlock');

    const selectElem = document.createElement('select');
    selectElem.name = 'cities';
    for (let key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];

        selectElem.appendChild(option);
    }

    parent.appendChild(selectElem);

}

function createPostStores(value) {
    const parent = document.getElementById('postsBlock');
    parent.innerHTML = '';
    const selectElem = document.createElement('select');
    selectElem.name = 'posts';
    const noCityText = document.createElement('p');

    for (let key in posts) {
        if (value === key) {
            for (let i = 1; i <= posts[key]; i++) {
                const option = document.createElement('option');
                option.value = `${i}`;
                option.textContent = `No ${i}`;

                selectElem.appendChild(option);
            }
            parent.appendChild(selectElem);
        } else if (value === '0') {
            noCityText.textContent = 'You doesn\'t choose the city!';
            parent.appendChild(noCityText);
        }
    }
}

function isValidSafe(inputForm) {
    const radioBlock = document.getElementById('paymentBlock');
    const payButtons = inputForm.pay;
    let nameValid = hasValue(inputForm.firstname);
    let midNameValid = hasValue(inputForm.middleName);
    let familyNameValid = hasValue(inputForm.familyName);
    let cityValid = hasValue(inputForm.cities);
    let payValids = hasValue(payButtons, radioBlock);
    let qtyValid = isQuantity(inputForm.qty);

    if (!nameValid || !midNameValid || !familyNameValid || !cityValid || !payValids || !qtyValid) {
        return false;
    } else {
        return true;
    }
}

function isQuantity(input) {
    if (input.value < 1 || input.value > 500) {
        return showError(input);
    } else {
        return showSuccess(input);
    }
}


function hasValue(input, parentBlock) {
    if (input.value.trim() === "" || input.value.trim() == "0" || !isNaN(input.value)) {
        return showError(input, parentBlock);
    }
    return showSuccess(input, parentBlock);
}

function showError(input, parentBlock) {
    return showMessage(input, "red", false, parentBlock);
}

function showSuccess(input, parentBlock) {
    return showMessage(input, "white", true, parentBlock);
}


function showMessage(input, color, type, parentBlock) {
    let msg;
    parentBlock ? msg = parentBlock.querySelector('small') : msg = input.parentNode.querySelector("small");
    msg.style.color = color;
    input.className = type ? "success" : "error";
    return type;
}

function ordersUpdate() {
    ordersArray.map((order, index) => addingOrder(order, index + 1));
}

function addingOrder(order, index) {
    const parent = document.getElementById('orders');
    const orderBlock = document.createElement('div');
    orderBlock.classList.add('order-info');
    const item = document.createElement('div');
    item.classList.add('hidden');
    const table = createOrderTable(order);
    const orderName = document.createElement('p');
    orderName.classList.add('order-name');
    orderName.textContent = `Order No${index}  |  ${order.date[1].tableValue}  |  ${order.finalPrice[1].tableValue}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.textContent = 'Delete this order';
    deleteBtn.classList.add('delete-button');
    deleteBtn.setAttribute('order-index', index);
    deleteBtn.addEventListener('click', () => {
        ordersArray.splice(index - 1, 1);
        localStorage.setItem('orders', JSON.stringify(ordersArray));
        orderBlock.remove();
        parent.innerHTML = '';
        ordersUpdate();
    })

    parent.appendChild(orderBlock);
    orderBlock.appendChild(orderName);
    orderBlock.appendChild(item);
    item.appendChild(table);
    item.appendChild(deleteBtn);
}

function createOrderTable(orderObj) {
    let tableKeys = [];
    let tableValues = [];
    for (let i in orderObj) {
        tableKeys.push(orderObj[i][0].tableKey);
        tableValues.push(orderObj[i][1].tableValue);
    };

    const table = document.createElement('table');
    for (let i = 0; i < tableKeys.length; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 2; j++) {
            const cell = row.insertCell();
            j % 2 != 0 ? cell.textContent = tableValues[i] : cell.textContent = tableKeys[i];
        };
    };
    return table;
}

function getOrderDate() {
    let date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDay() + 1, hour = date.getHours(), minutes = date.getMinutes();
    let msg = `${day}.${month}.${year} ${hour}:${minutes}`;
    return msg;
}