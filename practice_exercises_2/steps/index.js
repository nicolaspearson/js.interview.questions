// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (row === n) {
        return;
    }

    if (stair.length === n) {
        console.log(stair);
        steps(n, row + 1, '');
        return;
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         let spaces = n - i;
//         const output = [];
//         for (let j = 0; j < n; j++) {
//             if (spaces > 0) {
//                 spaces -= 1;
//                 output.unshift(' ');
//             } else {
//                 output.unshift('#');
//             }
//         }
//         console.log(output.join(''));
//     }
// }

module.exports = steps;
