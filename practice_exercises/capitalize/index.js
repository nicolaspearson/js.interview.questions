// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(' ');
  let newArray = [];
  for (item of arr) {
    newArray.push(item[0].toUpperCase() + item.substr(1));
  }
  return newArray.join(' ');
}

module.exports = capitalize;
