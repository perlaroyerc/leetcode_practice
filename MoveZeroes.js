/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

//Time complexity: O(n)
//Space complexity: O(1)

const moveZeroes = (nums) => {
    if(nums.length < 2) return nums;
    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] !== 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
    }

    return nums;
    
};