"use strict";
const Node = require("./Node");
const BinaryTree = require("./binary-tree");
const BinarySearchTree = require("./binary-search-tree");
const BT = new BinaryTree();
const BST = new BinarySearchTree();

BT.root = new Node(
  1,
  new Node(4, new Node(7), new Node(2)),
  new Node(3, new Node(9), new Node(6))
);

BST.root = new Node(
  23,
  new Node(8, new Node(4), new Node(16, new Node(15), new Node(22))),
  new Node(42, new Node(27), new Node(85, new Node(105)))
);
// BST.Add(23);
// BST.Add(8);

console.log(BT.PreOrder());
console.log(BT.InOrder());
console.log(BT.PostOrder());
console.log(BST.Contains(50));
console.log(BST.Contains(22));
