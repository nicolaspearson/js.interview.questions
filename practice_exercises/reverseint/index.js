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
  if (!n) {
    return n;
  }
  let str = n.toString();
  if (str.startsWith('-')) {
    return parseInt(
      '-' +
        str
          .replace('-', '')
          .split('')
          .reverse()
          .join('')
    );
  }
  return parseInt(
    str
      .split('')
      .reverse()
      .join('')
  );
}

module.exports = reverseInt;
