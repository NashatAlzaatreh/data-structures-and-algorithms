"use strict";

class Node {
  constructor(value, type) {
    this.value = value;
    this.type = type;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = null;
    this.cats = null;
  }

  enqueue(val, type) {
    if (val) {
      const animal = new Node(val, type);
      let pointer;
      if (animal.type === "dog") {
        pointer = this.dogs;
        if (!pointer) {
          this.dogs = animal;
          return;
        }
        while (pointer.next) {
          pointer = pointer.next;
        }
        pointer.next = animal;
        return;
      }

      if (animal.type === "cat") {
        pointer = this.cats;
        if (!pointer) {
          this.cats = animal;
          return;
        }
        while (pointer.next) {
          pointer = pointer.next;
        }
        pointer.next = animal;
        return;
      }
      return "its not a dog or a Cat";
    }
    return "please inter an animal";
  }

  dequeue(pref) {
    if (pref === "dog") {
      if (!this.dogs) {
        return "There are no dogs";
      }
      const deleted = this.dogs.value;
      this.dogs = this.dogs.next;
      return deleted;
    }

    if (pref === "cat") {
      if (!this.cats) {
        return "There are no cats";
      }
      const deleted = this.cats.value;
      this.cats = this.cats.next;
      return deleted;
    }
    return null;
  }
}

module.exports = AnimalShelter;
