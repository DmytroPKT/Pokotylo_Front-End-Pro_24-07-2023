const discount = 20;
const discountStart = 10000;
const discountCoefficient = (100 - discount) / 100;
const productLength = Object.keys(products).length;
const discountMessage = `Congratulations!\nWhen buying from ${discountStart} UAH you get a ${discount}%  discount!\nInstead of`;

let noConvertInput = firstMessage(productLength);


let orderLabel = inputConvertLabel(noConvertInput);

let orderCategory = inputConvert(noConvertInput);

showProducts(orderCategory);

let productNumber = orderCategory[productNo(orderCategory, orderLabel)];

let quantity = getAmount(productNumber, orderLabel);

priceFunc(productNumber, quantity, discountStart, discountCoefficient, discountMessage);