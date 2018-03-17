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

function pyramid(n) {
  const max = (n - 1) * 2 + 1;
  for (let i = 1; i <= n; i++) {
    const hashes = (i - 1) * 2 + 1;
    let str = '';
    const delta = max - hashes;
    for (let j = 0; j < delta / 2; j++) {
      str += ' ';
    }
    for (let j = 0; j < hashes; j++) {
      str += '#';
    }
    for (let j = 0; j < delta / 2; j++) {
      str += ' ';
    }
    console.log(str);
  }
}

module.exports = pyramid;
