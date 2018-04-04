// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newWords = [];
  for (word of str.split(' ')) {
    newWords.push(word.substr(0, 1).toUpperCase() + word.substr(1));
  }
  return newWords.join(' ');
}

module.exports = capitalize;
