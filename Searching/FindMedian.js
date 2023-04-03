/*Given two sorted arrays, array1 and array2 of size m and n, respectively, find the median of the two sorted arrays.

Example 1:
Input: Array1 = [2, 5, 8, 9] and Array2 = [1, 3, 6]
Output: 5
Explanation: size of the merged array is (4+3) = 7, So 4 element of the merged array [1, 2, 3, 5, 6, 8, 9] is our median, which is 5.
*/

//Brute Force solution
//TC: O(n + logm)
//SC: O(1)

const findMedian = (array1, array2) => {

    array2.forEach(el => {
        array1.push(el);
    });

    array1.sort((a, b) => a - b);
    let mid = Math.floor(array1.length / 2);
    return array1[mid];

}


const odd = (num) => {
    if(num & 1) return true;
}

console.log(odd(4))
console.log(findMedian([2, 5, 8, 9],[1, 3, 6]));