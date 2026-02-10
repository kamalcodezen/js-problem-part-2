const products = [
    { name: "vivo", price: 16965 },
    { name: "oppo", price: 26965 },
    { name: "xiaomi", price: 30965 },
    { name: "iPhone", price: 916965 }
]


// const products = [
//     { name: "vivo", price:   1  },
//     { name: "oppo", price:   1  },
//     { name: "xiaomi", price: 1  },
//     { name: "iPhone", price: 1   }
// ]



function bigPrice(products) {
    let costPhone = products[0];
    for (let product of products) {
        if (product.price > costPhone.price) {
            costPhone = product;
        }
    }
    return costPhone;
}

let costlyPhone = bigPrice(products);
console.log(costlyPhone);


function big_Price(products) {
    let maxPrice = products[0].price;
    for (let product of products) {
        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    }
    return maxPrice;
}

console.log(big_Price(products));


console.log(`==============`);

function cheapestPrice(products) {
    let cheapPrice = products[0];
    for (let product of products) {
        if (product.price < cheapPrice) {
            cheapPrice = product;
        }
    }
    return cheapPrice;
}

console.log(cheapestPrice(products));



console.log(`---------------------`);


// cheapest price

// second highest price

// price average

function totalAverage(products) {
    let sum = 0;
    for (let product of products) {
        sum = sum + product.price;
    }
    let average = sum / products.length;
    return average.toFixed(2);
}

console.log(totalAverage(products));