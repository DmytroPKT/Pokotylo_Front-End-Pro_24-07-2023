// productsLegth = Object.keys(products).length;
// // console.log(productsLegth)

// let itemIndex = parseInt(prompt('Enter No'));
// if ((productsLegth < itemIndex) || (1 > itemIndex) || !itemIndex || isNaN(itemIndex)) {
//     alert('Stupid');
// } else {
//     showProducts(itemIndex)
// }




// function itemChoose (item) {
//     switch(item){
//         case('1'):
//             item = 'phones';
//             return item;
//         case('2'):
//             item = 'laptops';
//             return item;
//         case('3'):
//             item = 'monitors';
//             return item;
//         case('4'):
//             item = 'printers';
//             return item;
//         case('5'):
//             item = 'routers';
//             return item;
//     };
// }

// function showProducts(item) {
//     console.log(`${item}`)
//     for (let i = 0; i < products[item].length; i++) {
//         let funcCatNo = products[item][i].no;
//         let funcCatPrice = products[item][i].price;
//         let funcCatBrand = products[item][i].brand;
//         let funcCatSeries = products[item][i].series;
//         let funcCatModel = products[item][i].model;
//         console.log(`Product No ${funcCatNo} | Price: ${funcCatPrice} UAH | Brand: ${funcCatBrand} | Series: ${funcCatSeries} | Model: ${funcCatModel}`)
//     };
// }

// console.log(products[0].phones[3])

const discount = 20;
const discountStart = 10000;
const discountCoefficient = (100 - discount) / 100;


function firstMessage() {
    let category;
    let confirmMessage;
    do {
        do {
            category = parseInt(prompt('Please, enter category number: 1 - phones, 2 - laptops, 3 - monitors, 4 -printers, 5 - routers'));
        } while(category > products.length || category < 0 || !category || isNaN(category));
        confirmMessage = confirm(`Are you sure that you wanna choose ${itemChoose(category)}?`)
    } while(!confirmMessage);
    return category;
}



let noConvertInput = firstMessage();

function itemChoose (item) {
    switch(item){
        case(1):
            item = 'phones';
            return item;
        case(2):
            item = 'laptops';
            return item;
        case(3):
            item = 'monitors';
            return item;
        case(4):
            item = 'printers';
            return item;
        case(5):
            item = 'routers';
            return item;
    };
}
let category = itemChoose(noConvertInput);



function showProducts(category) {
    console.log(category)
    for (let i = 0; i < products[category].length; i++) {
        let funcCatNo = products[category][i].no;
        let funcCatPrice = products[category][i].price;
        let funcCatBrand = products[category][i].brand;
        let funcCatSeries = products[category][i].series;
        let funcCatModel = products[category][i].model;
        let funcCatInStore = products[category][i].inStore;
        console.log('==================================================')
        console.log(`Product No ${funcCatNo} | Price: ${funcCatPrice} UAH | Brand: ${funcCatBrand} | Series: ${funcCatSeries} | Model: ${funcCatModel} | Remain in store: ${funcCatInStore} pcs.`)
    };
}


showProducts(category);


function productNo (cat) {
    let productNumber;
    let confirmMessage;
    do {
        do {
            productNumber = parseInt(prompt(`Please, choose any number of ${cat}:`));
        } while((productNumber < 1) || (productNumber > products[cat].length) || isNaN(productNumber));
        confirmMessage = confirm(`Are you sure that you wanna choose ${products[category][productNumber - 1].brand} ${products[category][productNumber - 1].model}?`);
    } while(!confirmMessage);
    return productNumber - 1;
}


let productNumber = productNo(category)

function getAmount(index) {
    let quantity;
    let confirmMessage;
    do {
        do {
            quantity = parseInt(prompt(`How many ${products[category][index].brand} ${[category]} for ${products[category][index].price} UAH you wanna to buy?`))
            if (quantity > products[category][index].inStore) {
                alert(`In store remain only ${products[category][index].inStore} pc(s)!`)
            };
        } while((quantity < 1) || (quantity > products[category][index].inStore) || isNaN(quantity));
        confirmMessage = confirm(`Are you sure that you wanna buy ${products[category][index].brand} ${products[category][index].model} in amount of ${quantity} pc(s)?`);
    } while(!confirmMessage)
    return quantity;
}

let quantity = getAmount(productNumber);


let finalPrice = products[category][productNumber].price * quantity;

function discountFinalPrice (qty) {
    let finalDiscountPrice = parseInt(products[category][productNumber].price * discountCoefficient * qty);
    console.log(`Congratulations! When buying from ${discountStart} UAH you get a ${discount}%  discount! Instead of ${finalPrice} UAH, yours order price for ${products[category][productNumber].brand} ${products[category][productNumber].model} in amount of ${quantity} pc(s) will be just only ${finalDiscountPrice} UAH!`)
}

function finalPriceFunc(qty) {
    if (finalPrice > discountStart) {
        discountFinalPrice(qty);
    } else {
        console.log(`Yours order price for ${products[category][productNumber].brand} ${products[category][productNumber].model} in amount of ${quantity} pc(s) will be ${finalPrice} UAH.`)
    };
}
finalPriceFunc(quantity);

