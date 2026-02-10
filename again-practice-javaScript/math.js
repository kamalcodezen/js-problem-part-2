const jim = 78;
const kim = 73;
const kamal = 69;
const jisan = 85;
const gorsia = 98;


if (jim > kim && jim > kamal && jim > jisan && jim > gorsia) {
    console.log("jim is boss");
} else if (kim > jim && kim > kamal && kim > jisan && kim > gorsia) {
    console.log("kim is boss");
} else if (kamal > jim && kamal > kim && kamal > jisan && kamal > gorsia) {
    console.log("kamal is boss");
} else if (jisan > jim && jisan > kim && jisan > kamal && jisan > gorsia) {
    console.log("jiasn is boss");
} else {
    console.log("gorsia is ultimate boss");
};



let bigNumber = [56, 76, 46, 68, 53, 45, 24];
console.log(Math.max(...bigNumber));

let newArray = [...bigNumber];
newArray[0] = 999;
console.log(newArray);
console.log(bigNumber);

let changeArray = bigNumber.slice();
changeArray[2] = 888;
console.log(changeArray);
console.log(bigNumber);


let number = 87;
let number2 = 67;
let number3 = 97;
let number4 = 47;

let tallestNumber = Math.max(number, number2, number3, number4);
console.log(tallestNumber);

let smallest = Math.min(23, 46, 76, 45, 18, 35, 22);
console.log(smallest);



console.log(`--------------------`);

let smallNumbers = [56, 76, 46, 68, 53, 45, 24];

function smallestNum(numbers) {
    let number = numbers[0];
    for (let i of numbers) {
        if (i < number) {
            number = i;
        }
    }
    return number;
}
console.log(smallestNum(smallNumbers));