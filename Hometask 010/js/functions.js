function getCategoriesList () {
    let message = '';
    for (let i = 1; i <= productsArray.length; i++) {
        message += `No${i} - ${productsArray[i-1]}\n`;
    }
    return message;
} 

function firstMessage() {
    let category;
    let confirmMessage;
    let requirements;
    do {
        do {
            category = parseInt(prompt(`Please, enter category number:\n${categoryList}.`));
            requirements = (category > productsArray.length) || (category < 0) || !category || isNaN(category);
            if (requirements) {
                alert(`Invalid input! Please enter only digits from 1 to ${productsArray.length}!`);
            };
        } while(requirements);
        confirmMessage = confirm(`Are you sure that you wanna choose ${productsArray[category - 1]}?`);
    } while(!confirmMessage);
    return category;
}

function showProducts(category) {
    for (let i = 0; i < category.length; i++) {
        console.log(`No ${category[i].no}\nPrice: ${category[i].price} UAH\nBrand: ${category[i].brand}\nSeries: ${category[i].series}\nModel: ${category[i].model}\nRemain in store: ${category[i].inStore} pcs.`);
        console.log('==================================================');
    };
}

function getProductNumber () {
    let productNumber;
    let confirmMessage;
    let requirements;
    do {
        do {
            productNumber = parseInt(prompt(`Please, choose any number of ${customerCategoryName}:`));
            requirements = (productNumber < 1) || (productNumber > customerCategory.length) || isNaN(productNumber);
            if (requirements) {
                alert(`We have only ${customerCategory.length} products in category of ${customerCategoryName}. There is no any product with a number ${productNumber}! Try again.`);
            };
        } while(requirements);
        confirmMessage = confirm(`Are you sure that you wanna choose ${customerCategory[productNumber - 1].brand} ${customerCategory[productNumber - 1].series} ${customerCategory[productNumber - 1].model}?`);
    } while(!confirmMessage);
    return productNumber - 1;
}

function getAmount() {
    let quantity;
    let confirmMessage;
    let requirements;
    do {
        do {
            quantity = parseInt(prompt(`How many ${orderNumber.brand} ${orderNumber.series} ${orderNumber.model} ${customerCategoryName} for ${orderNumber.price} UAH you wanna to buy?`));
            requirements = (quantity < 1) || (quantity > orderNumber.inStore) || isNaN(quantity);
            if (quantity > orderNumber.inStore) {
                alert(`${orderNumber.brand} ${orderNumber.series} ${orderNumber.model} remain in store only ${orderNumber.inStore} pc(s)!`);
            } else if (requirements) {
                alert('Invalid input! You have to enter positive natural numbers only!');
            };
        } while(requirements);
        confirmMessage = confirm(`Are you sure that you wanna buy ${orderNumber.brand} ${orderNumber.series} ${orderNumber.model} in amount of ${quantity} pc(s)?`);
    } while(!confirmMessage);
    return quantity;
}

function discountPrice (price) {
    let finalDiscountPrice = price * discountCoefficient;
    console.log(`${discountMessage} ${price} UAH, yours order price for ${orderNumber.brand} ${orderNumber.series} ${orderNumber.model} in amount of ${orderQuantity} pc(s) will be just only ${finalDiscountPrice.toFixed(2)} UAH!`);
}

function priceFunc() {
    let orderPrice = orderNumber.price * orderQuantity;
    if (orderPrice > discountStart) {
        discountPrice(orderPrice);
    } else {
        console.log(`Yours order price for ${orderNumber.brand} ${orderNumber.model} in amount of ${orderQuantity} pc(s) will be ${orderPrice} UAH.`);
    };
}