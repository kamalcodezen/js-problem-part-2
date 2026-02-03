
// compare two number using if else;
const nums1 = 34;
const nums2 = 45;

function biggestNum(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
const bigNumber = biggestNum(nums1, nums2);
console.log(bigNumber);


console.log(`-------------------------`);


// compare three number using if else
const number1 = 85;
const number2 = 95;
const number3 = 66;

function highestNum(nums1, nums2, nums3) {
    if (nums1 > nums2 && nums1 > nums3) {
        return nums1;
    } else if (nums2 > nums1 && nums2 > nums3) {
        return nums2;
    } else {
        return nums3;
    }

}

const biggerNum = highestNum(number1, number2, number3);
console.log(biggerNum);



console.log(`-------------------------`);



// compare four number using if else
const students1 = 75;
const students2 = 93;
const students3 = 85;
const students4 = 65;

function lowestMarks(a, b, c, d) {
    if (a <= b && a <= c && a <= d) {
        return { name: "students1", value: a };
    } else if (b <= a && b <= c && b <= d) {
        return { name: "students2", value: b };
    } else if (c <= a && c <= b && c <= d) {
        return { name: "students3", value: c };
    } else {
        return { name: "students4", value: d };
        // return "students4" + " " + students4;
    }
}

const result = lowestMarks(students1, students2, students3, students4);
console.log(`lowest marks is : ${result.value} (${result.name})`);
// console.log(result);



console.log(`----------------------------`);