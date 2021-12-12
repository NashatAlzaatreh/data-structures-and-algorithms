"use strict";
const LinkedList = require("../index");

class HashRepeated {
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

  repeated(string) {
    let repeatedWord;
    const adding = (key, value) => {
      if (repeatedWord) return;
      const idx = this.hash(key);
      const entry = { [key]: value };
      if (this.map[idx]) {
        return (repeatedWord = key);
      } else if (!this.map[idx]) {
        this.map[idx] = new LinkedList();
      }

      this.map[idx].addToLl(entry);
    };
    const arr = string.split(" ");
    arr.map((str) => {
      let word = str.toLowerCase();
      if (word.includes(",")) {
        word = word.split("");
        word.pop();
        word = word.join("");
      }
      adding(word, "test");
    });

    return repeatedWord;
  }
}

const testRepeated = new HashRepeated(5000);

// // testRepeated.repeated(
// //   "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
// // );
// console.log(
//   testRepeated.repeated(
//     "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
//   )
// );

module.exports = HashRepeated;
