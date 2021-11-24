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

function breadthFirst(tree) {
  let rootNode = tree.root;
  if (rootNode === null) {
    return "cant traverse an empty tree";
  }
  let temp = [];
  let final = [];
  temp.push(rootNode);
  while (temp.length > 0) {
    let currentNode = temp[0];
    if (currentNode.left !== null) {
      temp.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      temp.push(currentNode.right);
    }
    final.push(temp.shift().value);
  }
  return final;
}

function oddSum(tree) {
  let rootNode = tree.root;
  if (rootNode === null) {
    return "empty tree";
  }
  let sum = 0;
  const _traverse = (node) => {
    if (node.value % 2 !== 0) {
      sum += node.value;
    }
    if (node.left) {
      _traverse(node.left);
    }
    if (node.right) {
      _traverse(node.right);
    }
  };
  _traverse(tree.root);
  return sum;
}

module.exports = { BinaryTree, breadthFirst, oddSum };
