/*Given an array of N elements where elements are from the range [1, n]. One element of the array is repeated. 
Find the repeated element and the missing element.
Input: [2 1 3 3 5]
n: 5
Output: 
Repeating: 3
Missing: 4

*/

const missingAndRepeating = (nums) => {

    nums = nums.sort((a, b) => a - b);
    let missing;
    let duplicate;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i + 1) {
            duplicate = nums[i];
            missing = i + 1;
        }
    }

    console.log(`Repeating: ${duplicate}`);
    console.log(`Missing: ${missing}`);
};

console.log(missingAndRepeating([2, 1, 3, 3, 5]));