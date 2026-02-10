function totalCost(pantQuantity, shirtQuantity, shoesQuantity) {
    let shirtPrice = 700;
    let pantPrice = 800;
    let shoesPrice = 900;

    let totalPantPrice = pantQuantity * pantPrice;
    let totalShirtPrice = shirtQuantity * shirtPrice;
    let totalShoesPrice = shoesQuantity * shoesPrice;
    let totalAllPrice = totalPantPrice + totalShirtPrice + totalShoesPrice;
    return totalAllPrice;
}

console.log(totalCost(2, 3, 2));


console.log(`----------------------`);



const items = [
    { name: "shirt", price: 800, quantity: 3 },
    { name: "pant", price: 900, quantity: 2 },
    { name: "shoes", price: 700, quantity: 2 },

];

function totalNewCost(items) {
    let total = 0;
    for (let item of items) {
        let price = item.price * item.quantity;
        total = total + price;
    }
    return total
}
console.log(totalNewCost(items));



