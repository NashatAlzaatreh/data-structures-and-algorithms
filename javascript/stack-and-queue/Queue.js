"use strict";

const Node = require("./Node");

class Queue {
  constructor() {
    this.rare = null;
    this.front = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    this.length += 1;
    if (this.isEmpty()) {
      this.front = newNode;
      this.rare = newNode;
    } else {
      this.rare.next = newNode;
      this.rare = newNode;
    }

    return this.front;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "The Queue is Empty";
    }
    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length -= 1;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return "The Queue is Empty";
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
