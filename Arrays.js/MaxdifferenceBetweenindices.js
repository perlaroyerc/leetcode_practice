/*
You are given an array of N integers. You have to determine the maximum difference between two indices i and j, 
such that i < j and Array[i] ≤ Array[j].
*/

const maxDifferenceBetweenIndices = (array) => {

    let max = -Infinity;
    let diff;

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length - 1; j++){
            if(array[i] <= array[j] && i < j) {
                diff = j - i;
                max = Math.max(max, diff);
            }
        }
    }

    return max > 0 ? max : -1;

}

console.log(maxDifferenceBetweenIndices([4, 2, 8, 9, 11, 4, 3, 1]));
console.log(maxDifferenceBetweenIndices([4, 3, 2, 1]));