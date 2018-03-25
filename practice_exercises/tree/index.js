// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    // for (let i = 0; i < this.children.length; i++) {
    //   if (this.children[i].data === data) {
    //     this.children.splice(i, 1);
    //     return;
    //   }
    // }
    this.children = this.children.filter(child => {
      return child.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    if (!this.root) {
      return null;
    }

    const array = [this.root];
    while (array.length > 0) {
      const element = array.shift();
      array.push(...element.children);
      fn(element);
    }
  }

  traverseDF(fn) {
    if (!this.root) {
      return null;
    }

    const array = [this.root];
    while (array.length > 0) {
      const element = array.splice(0, 1)[0];
      array.unshift(...element.children);
      fn(element);
    }
  }
}

module.exports = { Tree, Node };
