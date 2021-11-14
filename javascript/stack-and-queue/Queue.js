"use strict";

const Node = require("./Node");
const Stack = require("./Stack");

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    this.length += 1;
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
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
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.front = null;
  }
  enqueue(value) {
    this.stack1.push(value);
    this.front = value;
  }
  dequeue() {
    if (!this.stack1.top) {
      return "pseudo queue is empty and cant be dequeued";
    }
    return this.stack1.pop();
  }
}

module.exports = { Queue, PseudoQueue };
