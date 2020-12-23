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
    let negative = false;
    if (n < 0) {
        negative = true;
    }
    const reversed = n.toString().replace('-', '').split('').reverse().join('');
    return parseInt(reversed) * (negative ? -1 : 1);
}

module.exports = reverseInt;
