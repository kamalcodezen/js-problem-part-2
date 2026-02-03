// Total Array biggest number find
const numbers = [78, 54, 87, 45, 93, 89, 75];

const bigNumbers = Math.max(...numbers);
console.log(bigNumbers);


console.log(`----------------------`);


function tallestNumber(nums) {
    let num = nums[0];
    for (let i of nums) {
        if (i > num) {
            num = i;
        }
    }
    return num;
}

const result = tallestNumber(numbers);
console.log(result);