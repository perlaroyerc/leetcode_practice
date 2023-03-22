/*
Given an array of N integers and a range [a, b], find the number of triplets from the given array with sum within the range.

In other words, the sum of all triplets should be greater or equal to a and lesser or equal to b.

Example 1:
Input: [4 8 6 3 2 7], range: [6 12]
Output: 4
Explanation: The 4 triplets are [4 6 2], [4 3 2], [6 3 2], and 
[3 2 7].

Example 2:
Input: [7 4 2 9], range: [14 15]
Output: 1
Explanation: The sum of the triplet [4 2 9] is 15 which is within the range [14 15

*/

const numOfTriplets = (array, range) => {
    
    array = array.sort((a, b) => a - b);
    let count = 0;
    let len = array.length;

    for(let i = 0 ; i < len - 2; i++){
        let j = i + 1;
        let k = len - 1;

        while(j <= k){

            let sum = array[i] + array[j] + array[k];

            if(sum <= k){
                count += (k - j);
                j++;
            }

            k--;
        }
    }

    return count;

};

console.log(numOfTriplets([4, 8, 6, 3, 2, 7], [6, 2])); //4



    // //Brute Force solution 
    // const numOfTriplets = (array, range) => {
        
    //     let count = 0;

    //     for(let i = 0; i < array.length; i++){
    //         for(let j = i + 1; j < array.length; j++){
    //             for(let k = j + 1; k < array.length; k++){

    //                 const sum = array[i] + array[j] + array[k];
    //                 console.log(sum)
    //                 if(sum >= range[0] && sum <= range[1]) count++;
    //             }
    //         }
    //     }

    //     return count;

    // };

    // console.log(numOfTriplets([4, 8, 6, 3, 2, 7], [6, 2])); //4