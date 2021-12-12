"use strict";
const LinkedList = require("../index");

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    const assciSum = key
      .split("")
      .reduce((total, n) => total + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size;
  }

  add(key, value) {
    const idx = this.hash(key);
    const entry = { [key]: value };

    if (!this.map[idx]) {
      this.map[idx] = new LinkedList();
    }

    this.map[idx].addToLl(entry);
  }

  get(key) {
    const idx = this.hash(key);
    return this.map[idx].head;
  }

  contains(key) {
    const idx = this.hash(key);
    if (this.map[idx]) return true;
    return false;
  }

  
}

module.exports = Hashtable;
