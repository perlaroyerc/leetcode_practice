/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/


const threeSum = (nums) => {
    const result = [];
    // sort array in ascending order
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 1; i++) {
      // if current number is the same as previous number
      // continue to next number in array
      if (nums[i] === nums[i - 1]) {
        continue;
      }
      // left will always be ahead of i by 1
      let left = i + 1;
      // right will start at the end of the array
      let right = nums.length - 1;
      // we'll iterate through the array as long as left is less than right
      while (left < right) {
        // grab total sum of current pointers
        const sum = nums[i] + nums[left] + nums[right];
        // if sum is less than 0, increment left pointer
        if (sum < 0) left++;
        // if sum is greater than 0, increment right pointer
        else if (sum > 0) right--;
        // else sum is 0
        else {
          // push current pointers to the array
          result.push([nums[i], nums[left], nums[right]]);
          // keep incrementing left
          left++;
          // while current number at left is the same as previous number and left is less than right
  
          // [0, 0, 0, 0]
          // if the array contains the same element keep incrementing left pointer 
          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
        }
      }
    }

    return result;
      
  };