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
}

module.exports = BinaryTree;
