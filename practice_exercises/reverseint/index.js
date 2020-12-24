// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

// function reverseInt(n) {
//   let result = '';
//   for (let item of n.toString()) {
//     if (item !== '-') {
//       result = item + result;
//     }
//   }
//   if (n < 0) return parseInt(result) * -1;
//   return parseInt(result);
// }

// function reverseInt(n) {
//   const result = parseInt(n.toString().replace(/[^\w]/g, '').split('').reverse().join(''));
//   if (n < 0) return result * -1;
//   return result;
// }

module.exports = reverseInt;
