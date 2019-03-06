// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, column = 0, level = '') {
    if (row === n) {
        return;
    }

    const length = n + n - 1;

    if (level.length === length) {
        console.log(level);
        return pyramid(n, row + 1, 0, '');
    }

    const middle = Math.floor(length / 2);
    const first = middle - row;
    const last = middle + row;
    if (column >= first && column <= last) {
        level += '#';
    } else {
        level += ' ';
    }

    pyramid(n, row, column + 1, level);
}

// function pyramid(n) {
//     const middle = Math.floor((n + n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         const first = middle - row;
//         const last = middle + row;
//         for (let column = 0; column < (n + n - 1); column++) {
//             if (column >= first && column <= last) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

module.exports = pyramid;
