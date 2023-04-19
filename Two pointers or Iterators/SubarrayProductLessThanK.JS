/*
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the
product of all the elements in the subarray is strictly less than k.

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

 */

const numSubarrayProductLessThanK = (nums, k) => {
    
    if(k <= 1) return 0;
    
    let count = 0;
    let product = 1;

    let start = 0;
    let end = 0;

    while(end < nums.length) {
        
        product *= nums[end];
        
        while(product >= k) {
            product /= nums[start];
            start++;
        }

        count += end - start + 1;
        end++;
    }

    return count;
    
};