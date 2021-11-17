"use strict";

class Stack {
  constructor() {
    this.front = null;
  }

  getMax() {
    if (!this.front) {
      return "Stack is EMPTY";
    }
    let pointer = this.front;
    let limit = this.front;
    while (limit) {
      if (pointer.value < limit.value) {
        pointer = limit;
      }
      limit = limit.next;
    }
    return pointer.value;
  }
}

module.exports = Stack;
