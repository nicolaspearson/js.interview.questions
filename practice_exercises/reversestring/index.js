// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((accumulator, char) => {
    debugger;
    return char + accumulator;
  }, '');
}

// function reverse(str) {
//   let reversed = '';
//   for (let c of str) {
//     reversed = c + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

module.exports = reverse;
