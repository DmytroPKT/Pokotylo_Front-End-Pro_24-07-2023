// function firstMessage () {
//     do {
//         categoryNo = prompt('Please enter category NUMBER: 1 - phones, 2 - laptops, 3-  monitors, 4 - printers, 5 - routers ');
//         return categoryNo;
//     }while(categoryNo < 1 || categoryNo > 5)
// }

function itemChoose (item) {
    switch(item){
        case('1'):
            item = 'phones';
            return item;
        case('2'):
            item = 'laptops';
            return item;
        case('3'):
            item = 'monitors';
            return item;
        case('4'):
            item = 'printers';
            return item;
        case('5'):
            item = 'routers';
            return item;
    };
}



function showProducts(item) {
    console.log(`${item}`)
    for (let i = 0; i < products[item].length; i++) {
        let funcCatNo = products[item][i].no;
        let funcCatPrice = products[item][i].price;
        let funcCatBrand = products[item][i].brand;
        let funcCatSeries = products[item][i].series;
        let funcCatModel = products[item][i].model;
        console.log(`Product No ${funcCatNo} | Price: ${funcCatPrice} UAH | Brand: ${funcCatBrand} | Series: ${funcCatSeries} | Model: ${funcCatModel}`)
    };
}
