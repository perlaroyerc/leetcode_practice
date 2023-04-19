/*
Given an integer array nums of length n and an integer target, 
find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

 */

//Time complexity: O(n^2)
//Space complexity: O(1)

const threeSumClosest = (nums, target) => {

    //store result to use as point of comparison
    let result = nums[0] + nums[1] + nums[nums.length -1];
    //sort array
    nums.sort((a, b) => a - b);

    //loop trough the array up to the second to last element
    for(let i = 0; i < nums.length -2; i++){
        //Declare pointers at the start and the end of the array
        let left = i + 1;
        let right = nums.length -1;
    
        //Iterate until they overlap
        while(left < right) {

            //compute the sum of the 3 pointers
            let currentSum = nums[i] + nums[left] + nums[right];

            //if sum is greater than target decrement right pointer
            if(currentSum > target) {
                right--;
            }
            //if sum is less than target increment left pointer
            else if(currentSum < target) {
                left++;
            }
            //if sum is equal to target return sum
            else {
                return currentSum;
            }
            //if the current sum is closer to target update result variable
            if(Math.abs(currentSum - target) < Math.abs(result - target)) {
                result = currentSum;
            }
        }
    }
    
    //return closest result
    return result;
};