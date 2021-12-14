"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  code(key) {
    const sumCharAsci = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (sumCharAsci * 13) % this.size;
  }

  add(key, value) {
    const hash = this.code(key);
    if (this.storage[hash]) {
      this.storage[hash].prepend({ [key]: value });
    } else {
      const linkList = new LinkedList();
      linkList.prepend({ [key]: value });
      this.storage[hash] = linkList;
    }
  }

  get(key) {
    const hash = this.code(key);
    if (this.storage[hash]) {
      if (this.storage[hash].length > 1) {
        let node = this.storage[hash].head;
        while (node) {
          if (node.value[key]) return node.value[key];
          node = node.next;
        }
      } else {
        return this.storage[hash].head.value[key];
      }
    }
  }

  contains(key) {
    const hash = this.code(key);
    if (this.storage[hash]) return true;
    return false;
  }

  hash(key) {
    const hash = this.code(key);
    return this.storage[hash] ? hash : new Error("key does not exist");
  }
}

function leftJoin(lMap, rMap) {
  const result = [];
  for (let i in lMap.storage) {
    result.push(Object.entries(lMap.storage[i].head.value)[0]);
  }
  for (let i in result) {
    if (rMap.get(result[i][0])) {
      result[i].push(rMap.get(result[i][0]));
    } else {
      result[i].push("null");
    }
  }
  return result;
}

module.exports = { Hashmap, leftJoin };
