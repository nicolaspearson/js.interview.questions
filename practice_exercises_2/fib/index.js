// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n < 2) {
        return n;
    }
  
    return fib(n - 1) + fib(n - 2);
}

// function fib(n, array = [0, 1]) {
//     if (n < 2) {
//         return n;
//     }
//     if (array.length - 1 === n) {
//         return array[n];
//     }
//     array.push(array[array.length - 2] + array[array.length - 1])
//     return fib(n, array);
// }

// function fib(n) {
//     const fib = [0, 1];
//     index = 1;
//     while (fib.length <= n) {
//         index++;
//         fib.push(fib[index - 2] + fib[index - 1])
//     }
//     return fib[n];
// }

module.exports = fib;
