"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;

    return this;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    return true;
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
      if (!currentNode) {
        result += "X";
      }
    }
    return result;
  }

  // push a node to the bottom of the linked list
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentValue = this.head;
      while (currentValue.next) {
        currentValue = currentValue.next;
      }
      currentValue.next = node;
    }
  }
  // add a node before a certain node
  insertBefore(old, neu) {
    let currentNode = this.head;
    if (currentNode.value === old) {
      this.insert(neu);
    } else {
      let nextNode;
      while (currentNode.value !== old) {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
      const node = new Node(old);
      currentNode.value = neu;
      currentNode.next = node;
      node.next = nextNode;
    }
  }
  // add a node after a certain node
  insertAfter(old, neu) {
    let currentNode = this.head;
    let nextNode;
    while (currentNode.value !== old) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return this.append(neu);
    } else {
      let newNode = new Node(neu);
      currentNode.next = newNode;
      newNode.next = nextNode;
    }
  }
  kthFromEnd(k) {
    if (k < 0) {
      return "error";
    }
    let arr = this.toString(this.head).split(" -> ");
    arr.pop();
    if (k > arr.length - 1) {
      return "exception";
    }
    return arr[arr.length - 1 - k];
  }
}
function zipLists(list1, list2) {
  let cur1 = list1.head;
  let cur2 = list2.head;
  let list3 = new LinkedList();
  while (cur1 || cur2) {
    if (cur1 != null) {
      list3.append(cur1.value);
      cur1 = cur1.next;
    }
    if (cur2 != null) {
      list3.append(cur2.value);
      cur2 = cur2.next;
    }
  }
  return list3.toString();
}

module.exports = { LinkedList, zipLists };
