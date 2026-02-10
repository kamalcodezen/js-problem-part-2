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