// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let column = startCol; column <= endCol; column++) {
            results[startRow][column] = counter;
            counter++;
        }
        
        startRow++;
        for (let row = startRow; row <= endRow; row++) {
            results[row][endCol] = counter;
            counter++;
        }

        endCol--;
        for (let column = endCol; column >= startCol; column--) {
            results[endRow][column] = counter;
            counter++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            results[row][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return results;

}

module.exports = matrix;
