"use strict";
const Node = require("./Node");
const BinaryTree = require("./binary-tree");

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    const _walk = (node, val) => {
      if (val < node.value) {
        if (node.left === null) return (this.left = new Node(val));
        _walk(node.left, val);
      }
      if (val > node.value) {
        if (node.right === null) return (this.right = new Node(val));
        _walk(node.right, val);
      }
    };
    _walk(this.root, value);
  }

  contains(val) {
    if (!this.root) throw new TypeError("Empty Tree");

    const _walk = (node) => {
      if (node.value === val) return true;

      if (val > node.value && node.right) return _walk(node.right);

      if (val < node.value && node.left) return _walk(node.left);

      return false;
    };
    return _walk(this.root);
  }
}

module.exports = BinarySearchTree;
