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
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const nodes = [];
    nodes.push(this.root);
    while (nodes.length !== 0) {
      const removedNode = nodes.shift();
      removedNode.children.map((node) => {
        nodes.push(node);
      });
      fn(removedNode);
    }
  }

  traverseDF(fn) {
    const nodes = [this.root];
    while (nodes.length) {
      const removedNode = nodes.shift();
      nodes.unshift(...removedNode.children);
      fn(removedNode);
    }
  }
}

module.exports = { Tree, Node };
