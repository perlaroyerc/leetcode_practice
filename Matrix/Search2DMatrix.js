/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

*/

//Binary Search solution
//TC: O(logn)
//SC: O(1)

    const searchMatrix = (matrix, target) => {

        const row = matrix.length;
        const col = matrix[0].length;
        let len = row * col;
      
        let start = 0;
        let end = len - 1;

        while(start <= end){
            let middle = Math.floor(start + (end - start) / 2);

            let midNum = matrix[Math.floor(middle/col)][middle % col];
            if(midNum === target) return true;
            else if(target < midNum) end = middle - 1;
            else start = middle + 1;
        }

        return false;


    }


//Brute Force

// const searchMatrix = (matrix, target) => {

//     const sortedMatrix = [];

//     for(let i = 0; i < matrix.length; i++){
//         const row = matrix[i];

//         for(let j = 0; j < row.length; j++){
//             sortedMatrix.push((matrix[i][j]));
//         }
//     }

//     let start = 0;
//     let end = sortedMatrix.length - 1;

//     while(start <= end){
//         let middle = Math.floor(start + (end - start) / 2);

//         if(sortedMatrix[middle] === target) return true;
//         else if(target < sortedMatrix[middle]) end = middle - 1;
//         else start = middle + 1;
//     }

//     return false;

// }

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));