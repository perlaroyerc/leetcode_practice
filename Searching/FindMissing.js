/*Given two arrays, A and B, of sizes N and M, respectively. 
Print all those elements of A that are missing in array B.

Every element of the first array must be present in the second array; if not, you have to print those numbers.

*/

//One Liner
// const findMissingElements = (array1, array2) => array1.filter((el) => !array2.includes(el));


//SC: O(n)
//TC: O(n)
const findMissingElements = (array1, array2) => {
    const cache = {};
    const result = [];

    for(let i = 0; i < array2.length; i++){
       if(!cache[array2[i]]) cache[array2[i]] = 1;
       else cache[array2[i]]++;
    }

    for(let j = 0; j < array1.length; j++){
        if(!cache[array1[j]]) result.push(array1[j]);
    }

    return result;

}


console.log(findMissingElements([1, 6, 4, 0, 2], [6, 3, 4, 5, 0]));
console.log(findMissingElements([9, 8, 7, 6, 5], [1, 2, 3, 4, 5]))