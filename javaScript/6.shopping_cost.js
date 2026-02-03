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