
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


