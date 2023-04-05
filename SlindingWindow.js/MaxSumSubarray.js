/*
You have an array of N positive integers and a positive integer K. 
You have to find the Maximum Sum Subarray of size K.

We will find the maximum sum, but it is easy to print the subarray too. We will see how.

Example 1:
Input:  [4 3 9 5 1 2], K = 3
Output: 17
Explanation: The subarray of size 3 with maximum sum 17 is [3 9 5].
Example 2:
Input:  [1 2 3], K = 2
Output: 5
Explanation: The subarray of size 2 with maximum sum is [2 3].

*/


const MaxSubarraySum = (input, k) => {
    let currentSum = 0;
    
    for(let i = 0; i < k; i++){
     currentSum += input[i];
    }

    let maxSum = currentSum;

    for(let j = k; j < input.length; j++){
        currentSum = currentSum - input[j - k] + input[j];
        maxSum = Math.max(maxSum, currentSum);
    }


    return maxSum;

}

console.log(MaxSubarraySum([4, 3, 9, 5, 1, 2], 3));
console.log(MaxSubarraySum([1, 2, 3], 2));