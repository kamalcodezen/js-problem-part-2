
// compare two number using if else;
const nums1 = 34;
const nums2 = 45;

function biggestNum(a, b) {
    console.log(a, b);
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
const bigNumber = biggestNum(nums1, nums2);
console.log(bigNumber);