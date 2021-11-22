"use strict";
const Node = require("./Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      arrayOfReadNodes.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return arrayOfReadNodes;
  }

  inOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      arrayOfReadNodes.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return arrayOfReadNodes;
  }

  postOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      arrayOfReadNodes.push(node.value);
    };
    _walk(this.root);
    return arrayOfReadNodes;
  }

  treeMax() {
    if (!this.root) throw new Error("Empty Tree");
    let max = this.root.value;
    const _traverse = (node) => {
      if (node.value > max) max = node.value;
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return max;
  }
}

module.exports = BinaryTree;
