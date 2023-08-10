function firstMessage(productsAmount) {
    let category;
    let confirmMessage;
    let requirements;
    do {
        do {
            category = parseInt(prompt('Please, enter category number:\n1 - phones,\n2 - laptops,\n3 - monitors,\n4 - printers,\n5 - routers.'));
            requirements = (category > productsAmount) || (category < 0) || !category || isNaN(category);
            if (requirements) {
                alert(`Invalid input! Please enter only digits from 1 to ${productsAmount}!`);
            };
        } while(requirements);
        confirmMessage = confirm(`Are you sure that you wanna choose ${inputConvertLabel(category)}?`);
    } while(!confirmMessage);
    return category;
}

function inputConvertLabel (input) {
    let label;
    switch(input){
        case 1:
            return label = 'phones';
        case 2:
            return label = 'laptops';
        case 3:
            return label = 'monitors';
        case 4:
            return label = 'printers';
        case 5:
            return label = 'routers';
    };
}

function inputConvert (input) {
    switch(input){
        case 1:
            return input = products.phones;
        case 2:
            return input = products.laptops;
        case 3:
            return input = products.monitors;
        case 4:
            return input = products.printers;
        case 5:
            return input = products.routers;
    };
}

function showProducts(category) {
    for (let i = 0; i < category.length; i++) {
        console.log(`No ${category[i].no}\nPrice: ${category[i].price} UAH\nBrand: ${category[i].brand}\nSeries: ${category[i].series}\nModel: ${category[i].model}\nRemain in store: ${category[i].inStore} pcs.`);
        console.log('==================================================');
    };
}

function productNo (cat, label) {
    let productNumber;
    let confirmMessage;
    let requirements;
    do {
        do {
            productNumber = parseInt(prompt(`Please, choose any number of ${label}:`));
            requirements = (productNumber < 1) || (productNumber > cat.length) || isNaN(productNumber);
            if (requirements) {
                alert(`We have only ${cat.length} products in category of ${label}. There is no any product with a number ${productNumber}! Try again.`);
            };
        } while(requirements);
        confirmMessage = confirm(`Are you sure that you wanna choose ${cat[productNumber - 1].brand} ${cat[productNumber - 1].series} ${cat[productNumber - 1].model}?`);
    } while(!confirmMessage);
    return productNumber - 1;
}

function getAmount(productNu, label) {
    let quantity;
    let confirmMessage;
    let requirements;
    do {
        do {
            quantity = parseInt(prompt(`How many ${productNu.brand} ${productNu.series} ${productNu.model} ${label} for ${productNu.price} UAH you wanna to buy?`));
            requirements = (quantity < 1) || (quantity > productNu.inStore) || isNaN(quantity);
            if (quantity > productNu.inStore) {
                alert(`${productNu.brand} ${productNu.series} ${productNu.model} remain in store only ${productNu.inStore} pc(s)!`);
            } else if (requirements) {
                alert('Invalid input! You have to enter positive natural numbers only!');
            };
        } while(requirements);
        confirmMessage = confirm(`Are you sure that you wanna buy ${productNu.brand} ${productNu.series} ${productNu.model} in amount of ${quantity} pc(s)?`);
    } while(!confirmMessage);
    return quantity;
}

function discountPrice (priceOrder, productNu, qty, discCoef, dicMessage) {
    let finalDiscountPrice = priceOrder * discCoef;
    console.log(`${dicMessage} ${priceOrder} UAH, yours order price for ${productNu.brand} ${productNu.series} ${productNu.model} in amount of ${qty} pc(s) will be just only ${finalDiscountPrice.toFixed(2)} UAH!`);
}

function priceFunc(productNu, qty, discStart, discCoef, dicMessage) {
    let orderPrice = productNu.price * qty;
    if (orderPrice > discStart) {
        discountPrice(orderPrice, productNu, qty, discCoef, dicMessage);
    } else {
        console.log(`Yours order price for ${productNu.brand} ${productNu.model} in amount of ${qty} pc(s) will be ${orderPrice} UAH.`);
    };
}