
let categoryNo;
do {
    categoryNo = prompt('Please enter category NUMBER: 1 - phones, 2 - laptops, 3-  monitors, 4 - printers, 5 - routers ');
}while(categoryNo < products.length || categoryNo >= products.length || !categoryNo || isNaN(categoryNo));

// let category = firstMessage();
let item = itemChoose(categoryNo);
showProducts(item);

// const category = prompt('Please enter cat: smartphones/ tv/laptop');
// const itemNo = prompt('Please enter No product')
