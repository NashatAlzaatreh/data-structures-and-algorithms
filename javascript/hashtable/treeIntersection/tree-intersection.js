"use strict";
const Node = require("../../trees/Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
}
class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  treeIntersection(tree1, tree2) {
    if (!tree1.root && !tree2.root && !tree1 && !tree2) return "empty tree/s";
    const arr = [];

    const addNode = (val) => {
      if (this.map[val]) {
        this.map[val].prepend(val);
      } else {
        const linkList = new LinkedList();
        linkList.prepend(val);
        this.map[val] = linkList;
      }
    };

    const addTree = (node) => {
      if (node.value) addNode(node.value);
      if (node.left) addTree(node.left);
      if (node.right) addTree(node.right);
    };
    addTree(tree1.root);

    const checkIntersection = (node) => {
      if (this.map[node.value]) {
        arr.push(node.value);
      }
      if (node.left) checkIntersection(node.left);
      if (node.right) checkIntersection(node.right);
    };
    checkIntersection(tree2.root);

    return arr;
  }
}

module.exports = { Hashtable, LinkedList };
