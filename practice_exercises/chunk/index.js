// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];
//   let start = 0;
//   let end = size;
//   for (let i = 0; i < Math.ceil(array.length / size); i++) {
//     const chunk = array.slice(start, end);
//     chunked.push(chunk);
//     start += size;
//     end += size;
//   }
//   return chunked;
// }

// function chunk(array, size) {
//     let tmpArray = [];
//     const chunkArray = [];
//     for (let i = 0; i < array.length; i++) {
//       const item = array[i];
//       if (tmpArray.length === size) {
//         chunkArray.push(tmpArray);
//         tmpArray = [];
//         tmpArray.push(item);
//       } else {
//         tmpArray.push(item);
//       }
//       if (i === array.length - 1) {
//         chunkArray.push(tmpArray);
//       }
//     }
//     console.log(chunkArray);
//     return chunkArray;
//   }

module.exports = chunk;
