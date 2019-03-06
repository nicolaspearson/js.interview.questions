// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0;
    let maxChar = '';

    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// function maxChar(str) {
//     const array = str.toLowerCase().replace(/[^\w]+/g, '').split('').sort();
//     let max = 0;
//     let count = 0;
//     let char;
//     let current;
//     for (let letter of array) {
//         if (current === letter) {
//             // same
//             count++;
//         } else {
//             // change
//             if (count > max) {
//                 max = count;
//                 char = current;
//             }
//             current = letter;
//         }
//     }
//     return char ? char : current;
// }

module.exports = maxChar;
