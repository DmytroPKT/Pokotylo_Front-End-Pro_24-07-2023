const discount = 20;
const discountStart = 10000;
const discountCoefficient = (100 - discount) / 100;
const discountMessage = `Congratulations!\nWhen buying from ${discountStart} UAH you get a ${discount}%  discount!\nInstead of`;
const productsArray = Object.keys(products);

const categoryList = getCategoriesList();

let customerCategoryName = productsArray[firstMessage() - 1];
let customerCategory = products[customerCategoryName];

showProducts(customerCategory);

let orderNumber = customerCategory[getProductNumber()];

let orderQuantity = getAmount();

priceFunc();