/*
Alice has n candies, where the ith candy is of type candyType[i]. 
Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). 
Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

*/

//Space complexity: O(1)
//Time complexity: O(nlogn)

const distributeCandies = (candyType) => {
    if(!candyType.length) return 0;

    candyType = candyType.sort((a, b) => a - b);

    let len = candyType.length / 2;
    let currentCandyType = -Infinity;
    let maxCount = 0;

    for(let i = 0; i < candyType.length; i++){
        if(candyType[i] !== currentCandyType){
            currentCandyType = candyType[i];
            maxCount++;
        }

        if(maxCount === len) return maxCount;
    }

    return maxCount;
    
};