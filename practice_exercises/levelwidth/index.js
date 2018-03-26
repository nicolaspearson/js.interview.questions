// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root) {
    return [];
  }
  const levels = [];
  const array = [{ row: 0, node: root }];
  const sumObjects = { 0: 1 };

  while (array.length > 0) {
    const element = array.shift();
    for (let child of element.node.children) {
      const row = element.row + 1;
      array.push({ row, node: child });
      sumObjects[row] = (sumObjects[row] || 0) + 1;
    }
  }

  const result = [];
  for (key in sumObjects) {
    result.push(sumObjects[key]);
  }
  return result;
}

module.exports = levelWidth;
