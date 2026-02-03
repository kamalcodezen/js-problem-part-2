const nums = [45, 87, 35, 76, 97, 59];


const smallNum = Math.min(...nums);
console.log(smallNum);

console.log(`----------------------`);

function getSmallestNumber(numbers) {
    let smallest = numbers[0];
    for (let num of numbers) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}

const result = getSmallestNumber(nums);
console.log(result);




console.log(`---------------------`);


const cars = [
    { name: "bmw", price: 1903454 },
    { name: "skoda", price: 1094528 },
    { name: "mercedes", price: 4554278 },
    { name: "audi", price: 2198008 }
];

function carsLowestPriceFind(prices) {
    let min = prices[0];
    for (let val of prices) {
        if (val.price < min.price) {
            min = val;
        }
    }
    return min;
}

const total = carsLowestPriceFind(cars);
console.log(total);

