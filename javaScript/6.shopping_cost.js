const products = [
    { name: "shirt", price: 100 },
    { name: "pant", price: 200 },
    { name: "shoes", price: 100 }
];

function totalProductsPrice(products) {
    let total = 0;
    for (let val of products) {
        total = total + val.price;
    }
    return total;
}

const total = totalProductsPrice(products);
console.log(total);


console.log(`------------------`);


const items = [
    { name: "pant", price: 200, quantity: 1 },
    { name: "shirt", price: 100, quantity: 1 },
    { name: "shoes", price: 100, quantity: 1 }
];


function itemsQuantityCount(items) {
    let total = 0;
    for (let item of items) {
        console.log(item);
        let totalCost = item.price * item.quantity;
        total = total + totalCost;
    }
    return total;
}

const result = itemsQuantityCount(items);
console.log(result);    