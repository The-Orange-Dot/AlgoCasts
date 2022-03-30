// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    //this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let thisNode = "";
    let nextNode = this.head;

    while (nextNode) {
      thisNode = nextNode;
      nextNode = nextNode.next;
    }
    return thisNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    } else {
      return;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let thisNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      thisNode = nextNode;
      nextNode = nextNode.next;
    }

    thisNode.next = null;
  }

  insertLast(data) {
    // let thisNode = this.head;
    // let nextNode = this.head.next;
    // while (nextNode) {
    //   thisNode = nextNode;
    //   nextNode = nextNode.next;
    // }
    let thisNode = this.getLast();
    thisNode.next = new Node(data);
  }
}

module.exports = { Node, LinkedList };
