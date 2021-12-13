const { Hashtable } = require("../treeIntersection/tree-intersection");
const Node = require("../../trees/Node");
const { BinaryTree } = require("../../trees/binary-tree");

describe("Binary Tree Insertion", () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const one2 = new Node(1);
  const two2 = new Node(2);
  const three2 = new Node(3);
  const four2 = new Node(4);
  const seven2 = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const tree1 = new BinaryTree(one);
  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  three.right = seven;
  const tree2 = new BinaryTree(one2);
  one2.left = two2;
  one2.right = three2;
  two2.left = four2;
  two2.right = eight;
  three2.left = nine;
  three2.right = seven2;

  //          1
  //        / |  \
  //      2   |   3
  //     / \  |  / \
  //    4   5 | 6   7
  //          1
  //        / |  \
  //      2   |   3
  //     / \  |  / \
  //    4   8 | 9   7
  test("Find common values in 2 binary trees.", () => {});
  const expected = [1, 2, 4, 3, 7];
  const hashMap = new Hashtable(4000);
  const arr = hashMap.treeIntersection(tree1, tree2);
  expect(arr[0]).toBe(expected[0]);
  expect(arr[1]).toBe(expected[1]);
  expect(arr[2]).toBe(expected[2]);
  expect(arr[3]).toBe(expected[3]);
  expect(arr[4]).toBe(expected[4]);
});
