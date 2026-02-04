
function addition(a, b) {
    const sum = a + b;
    return sum;
}

function multiply(a, b) {
    const multiTotal = a * b;
    return multiTotal;
}

function substrack(a, b) {
    const subTotal = a - b;
    return subTotal;
}
function divide(a, b) {
    const divTotal = a / b;
    return divTotal;
}


function calculate(a, b, operation) {
  operation = operation.toLowerCase();

    if (operation === "add") {
        const add = addition(a, b);
        return add;
    } else if (operation === "multiply") {
        const multi = multiply(a, b);
        return multi;
    } else if (operation === "substrack") {
        const sub = substrack(a, b);
        return sub;
    } else if (operation === "divide") {
        const div = divide(a, b);
        return div;
    } else {
        return "only multiply, subtrack, division, addition is allowed ."
    }
}
const finalResult = calculate(6, 10, "Add");
console.log(finalResult);