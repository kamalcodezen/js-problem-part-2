// layer Discount

function flatDiscount(quantity) {

    if (quantity <= 100) {
        let total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        let total = quantity * 90;
        return total;
    } else {
        let total = quantity * 70;
        return total;
    }
}
const total = flatDiscount(300);
console.log(total);


console.log(`======================`);


function quantity1(quantity) {
    let total = 0
    if (quantity > 200) {

        // ----- first 100 times -----
        let firstQuantity = 100;
        let firstPrice = 100;
        let firstTotal = firstQuantity * firstPrice;
        total = total + firstTotal;

        // --- second hundred time ----
        let secondQuantity = 100;
        let secondPrice = 90;
        let secondTotal = secondQuantity * secondPrice;
        total = total + secondTotal;

        // --- big items ---
        let bigQuantity = quantity - 200;
        let bigPrice = 70;
        let bigTotal = bigQuantity * bigPrice;
        total = total + bigTotal;

    } else if (quantity > 100) {

        // ----- first 100 times -----
        let firstQuantity = 100;
        let firstPrice = 100;
        let firstTotal = firstQuantity * firstPrice;
        total = total + firstTotal;

        // --- big items ---
        let bigQuantity = quantity - 100;
        let bigPrice = 90;
        let bigTotal = bigQuantity * bigPrice;
        total = total + bigTotal;

    } else {
        let singlePrice = 100;
        let singleTotal = quantity * singlePrice;
        total = total + singleTotal;
    }

    return total;
}

function layerDiscount(allQuantity) {
    let firstQuantity = quantity1(allQuantity);
    return firstQuantity;
}
const totalDiscount = layerDiscount(50);
console.log(totalDiscount);


console.log(`--------------------`);


function layerDiscount2(quantity) {
    let totalPrice = 0;
    if (quantity > 200) {
        totalPrice = totalPrice + 100 * 100;
        totalPrice = totalPrice + 100 * 90;
        totalPrice = totalPrice + (quantity - 200) * 70;
    } else if (quantity > 100) {
        totalPrice += 100 * 100;
        totalPrice += (quantity - 100) * 90;
    } else {
        totalPrice += quantity * 100;
    }
    return totalPrice;
}

const finalTotal = layerDiscount(60);
console.log(finalTotal);