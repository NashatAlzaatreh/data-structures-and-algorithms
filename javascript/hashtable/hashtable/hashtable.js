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

function leftJoin(lMap, rMap) {
  const result = [];
  for (let i in lMap.add) {
    result.push(Object.entries(lMap.add[i].head.value)[0]);
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

module.exports = { Hashtable, leftJoin };
