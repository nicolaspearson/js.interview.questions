// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let maxChar = '';
  let maxCount = 0;
  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// function maxChar(str) {
//   const myMap = new Map();
//   for (let item of str) {
//     if (myMap.has(item)) {
//       myMap.set(item, myMap.get(item) + 1);
//     } else {
//       myMap.set(item, 1);
//     }
//   }
//   let myChar = '';
//   let maxCount = 0;
//   myMap.forEach((value, key) => {
//     if (value > maxCount) {
//       maxCount = value;
//       myChar = key;
//     }
//   });
//   return myChar;
// }

module.exports = maxChar;
