

function totalQuantity(shirtQuantity, pantQuantity, shoesQuantity) {

    const shirtPrice = 300;
    const pantPrice = 400;
    const shoesPrice = 700;

    const shirts = shirtPrice * shirtQuantity;
    const pants = pantPrice * pantQuantity;
    const shoes = shoesPrice * shoesQuantity;

    const totalPrice = shirts + pants + shoes;
    return totalPrice;

}
const total = totalQuantity(2, 3, 2);
console.log("Shopping Invest =", total);