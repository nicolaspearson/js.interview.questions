// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((acc, cur) => {
        return acc = cur + acc;
    }, '');
    // return str.split('').reverse().join('');
    // let word = '';
    // for (let i = str.length -1; i >= 0; i--) {
    //     word += str[i];
    // }
    // return word;
}

module.exports = reverse;
