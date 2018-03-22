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

function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }
  const max = 2 * n - 1;
  const midpoint = Math.floor(max / 2);
  if (level.length === max) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  let add = ' ';
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  }
  pyramid(n, row, level + add);
}

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// function pyramid(n) {
//   const max = (n - 1) * 2 + 1;
//   for (let i = 1; i <= n; i++) {
//     const hashes = (i - 1) * 2 + 1;
//     let str = '';
//     const delta = max - hashes;
//     for (let j = 0; j < delta / 2; j++) {
//       str += ' ';
//     }
//     for (let j = 0; j < hashes; j++) {
//       str += '#';
//     }
//     for (let j = 0; j < delta / 2; j++) {
//       str += ' ';
//     }
//     console.log(str);
//   }
// }

module.exports = pyramid;
