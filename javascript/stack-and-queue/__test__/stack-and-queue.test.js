"use strict";

const Node = require("../Node");
const { Queue } = require("../Queue");
const Stack = require("../Stack");
const { PseudoQueue } = require("../Queue");

describe("stack test ", () => {
  it("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack).toBeDefined();
    expect(stack.top.value).toEqual(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack).toBeDefined();
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack).toBeDefined();
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
  });

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack).toBeDefined();
    expect(stack.peek()).toEqual(3);
  });

  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    const stack = new Stack();

    expect(stack.peek()).toEqual("Empty Stack");
    expect(stack.pop()).toEqual("Empty Stack");
  });
});

describe("queue test ", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue).toBeDefined();
    expect(queue.front.value).toEqual(1);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue).toBeDefined();
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.rear.value).toEqual(3);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();

    expect(queue.front.value).toEqual(2);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();

    expect(queue).toBeDefined();
    expect(queue.front).toEqual(null);
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    const queue = new Queue();

    expect(queue.peek()).toEqual("The Queue is Empty");
    expect(queue.dequeue()).toEqual("The Queue is Empty");
  });

  it("Can successfully push using PseudoQueue", () => {
    const pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    expect(pseudo).toBeDefined();
    expect(pseudo.front).toEqual(1);
  });

  it("Can successfully push using PseudoQueue", () => {
    const pseudo = new PseudoQueue();
    pseudo.dequeue(1);
    expect(pseudo).toBeDefined();
    expect(pseudo.front).toEqual(null);
  });
});
