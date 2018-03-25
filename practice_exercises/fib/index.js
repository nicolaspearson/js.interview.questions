// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function slowFib(number) {
  if (number <= 1) {
    return number;
  }

  return fib(number - 2) + fib(number - 1);
}

function memoize(inputFunction) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = inputFunction.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fib = memoize(slowFib);

// function fib(number) {
//   const sequence = [];
//   for (let i = 0; i <= number; i++) {
//     if (i <= 1) {
//       sequence.push(i);
//       continue;
//     }
//     sequence.push(sequence[i - 2] + sequence[i - 1]);
//   }
//   return sequence[number];
// }

module.exports = fib;
