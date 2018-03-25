// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.size() <= 1) {
      this.head = null;
      return;
    }

    let node = this.head;
    let prevNode = null;
    while (node) {
      if (!node.next) {
        prevNode.next = null;
        return;
      }
      prevNode = node;
      node = node.next;
    }
  }

  insertLast(data) {
    if (this.head) {
      const node = new Node(data, null);
      this.getLast().next = node;
    } else {
      this.insertFirst(data);
    }
  }

  getAt(position) {
    let count = 0;
    if (this.head) {
      let node = this.head;
      while (node) {
        if (count === position) {
          return node;
        }
        count++;
        node = node.next;
      }
    }
    return null;
  }

  removeAt(position) {
    if (!this.head) {
      return;
    }

    if (position === 0) {
      this.head = this.head && this.head.next ? this.head.next : null;
      return;
    }

    let prevNode = this.getAt(position - 1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, position) {
    const newNode = new Node(data, null);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prevNode = this.getAt(position - 1);
    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    } else {
      let lastNode = this.getLast();
      lastNode.next = newNode;
    }

    // let count = 0;
    // let node = this.head;
    // let prevNode = null;
    // while (node) {
    //   if (count === position) {
    //     break;
    //   }
    //   count++;
    //   prevNode = node;
    //   node = node.next;
    // }
    // // Insert
    // if (prevNode) {
    //   newNode.next = node;
    //   prevNode.next = newNode;
    // }
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
