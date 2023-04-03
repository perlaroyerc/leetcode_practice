/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

//Time complexity: O(mn)
//Space complexity O(1)

const spiralOrder = (matrix) => {

    let rowStart = 0;
    let colStart = 0;
    let rowEnd = matrix.length -1;
    let colEnd = matrix[0].length -1;
    const result = [];

    while(rowStart <= rowEnd && colStart <= colEnd){
        //top side
        for(let c = colStart; c <= colEnd; c++){
            result.push(matrix[rowStart][c])
        }

        //right side
        for(let r = rowStart + 1; r <= rowEnd; r++){
            result.push(matrix[r][colEnd]);
        }

        if(rowStart < rowEnd && colStart < colEnd) {

            //bottom side
            for(let c = colEnd - 1; c > colStart; c--){
                result.push(matrix[rowEnd][c]);
            }

            for(let r = rowEnd; r > rowStart; r--){
                result.push(matrix[r][colStart]);
            }
        }

        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;

    }

    return result;

}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));