
function totalQuantity(shirtQuantity, pantQuantity, shoesQuantity) {
    let shirtsPrice = 800;
    let pantsPrice = 1200;
    let shoesPrices = 700;

    // shirt
    if (shirtQuantity >= 10) {
        shirtsPrice = shirtsPrice * 50 / 100;
        shirtsPrice = shirtsPrice * shirtQuantity;
    } else if (shirtQuantity >= 5) {
        shirtsPrice = shirtsPrice * 75 / 100;
        shirtsPrice = shirtsPrice * shirtQuantity;
    } else {
        shirtsPrice = shirtsPrice * shirtQuantity;
    };

    // pants
    if (pantQuantity >= 10) {
        pantsPrice = pantsPrice * 50 / 100;
        pantsPrice = pantsPrice * pantQuantity;
    } else if (pantQuantity >= 5) {
        pantsPrice = pantsPrice * 75 / 100;
        pantsPrice = pantsPrice * pantQuantity;
    } else {
        pantsPrice = pantsPrice * pantQuantity;
    };

    // shoes
    if (shoesQuantity >= 10) {
        shoesPrices = shoesPrices * 50 / 100;
        shoesPrices = shoesPrices * shoesQuantity
    } else if (shoesQuantity >= 5) {
        shoesPrices = shoesPrices * 75 / 100;
        shoesPrices = shoesPrices * shoesQuantity
    } else {
        shoesPrices = shoesPrices * shoesQuantity
    };

    return { shirts: shirtsPrice, pants: pantsPrice, shoes: shoesPrices };
}
const total = totalQuantity(11, 4, 8);
console.log(total)


