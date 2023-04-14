/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Input: nums = [1,3,4,2,2]
Output: 2

*/


// //Brute force solution
const findDuplicate = (nums) => {

    nums.sort((a, b) => a - b);
    let i = 0;
    let j = i + 1;

    while(i < nums.length) {
        if(nums[i] === nums[j]) return nums[i];
        i++;
        j++;
    }
     
};