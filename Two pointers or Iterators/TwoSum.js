/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints
2 <= nums.length <= 105
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/


//Space complexity: O(1)
//Time complexity: O(n)


const twoSum = (nums, target) => {

    let i = 0;
    let j = nums.length - 1;

    while(i < nums.length){
        const current = nums[i] + nums[j];

        if(current === target) return [i, j];
        else if(current > target) j--;
        else i++;
    }

}

// console.log(twoSum([-1,-2,-3,-4,-5], -8));