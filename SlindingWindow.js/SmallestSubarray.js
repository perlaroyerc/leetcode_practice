/*
You are given an array of integers A and an integer target, and you have to find the smallest Subarray 
of A such that the sum of its elements is greater or equal to the target.

If no such subarray exists, then output 0.

Input: [4, 1, 6, 2, 3] and target = 8
Output: 2
Explanation: The smallest subarray with sum greater or equal to 8 is [2, 6].

Input: [2, 2, 2, 2] and target = 10
Output: 0
Explanation: No subarray exists whose sum is greater or equal to 10.

*/

//Time complexity: O(n)
//Space complexity O(1)

const smallestSubarray = (input, target) => {
    let minSubarray = Infinity;
    let sum = 0;
    let start = 0;

    for(end = 0; end < input.length; end++){
        sum += input[end];

        while(sum >= target){

            minSubarray = Math.min(minSubarray, end - start + 1);
            sum -= input[start];
            start++
        }

    }

    return minSubarray !== Infinity ? minSubarray : 0;

}

// console.log(smallestSubarray([4, 1, 6, 2, 3], 8));
// console.log(smallestSubarray([2, 2, 2, 2], 10));