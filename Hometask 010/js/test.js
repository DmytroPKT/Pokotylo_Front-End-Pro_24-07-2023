let productsArray = Object.keys(products);
console.log(productsArray);


function categoryList () {
    let message = '';
    for (let i = 1; i <= productsArray.length; i++) {
        message += `No${i} - ${productsArray[i-1]}\n`;
    }
    return message;
} 

let categoryLists = categoryList();

let mes = parseInt(prompt(`Enter No:\n${categoryLists}.`));





let customerCatNo = products[productsArray[mes - 1]];

console.log(customerCatNo);

function showProducts(category) {
    for (let i = 0; i < category.length; i++) {
        console.log(`No ${category[i].no}\nPrice: ${category[i].price} UAH\nBrand: ${category[i].brand}\nSeries: ${category[i].series}\nModel: ${category[i].model}\nRemain in store: ${category[i].inStore} pcs.`);
        console.log('==================================================');
    };
}

showProducts(customerCatNo);


// let customerItemNo =  products[customerCatNo][parseInt(prompt(`Enter any number of tovar`)) - 1];

// console.log(customerItemNo);
