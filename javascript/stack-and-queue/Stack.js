"use strict";

const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty Stack";
    } else {
      const temp = this.top;
      this.top = this.top.next;
      this.next = null;
      return temp.value;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "Empty Stack";
    }
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
