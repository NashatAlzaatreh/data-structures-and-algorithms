"use strict";

const { LinkedList } = require("./lib/LinkedList");
const { zipLists } = require("./lib/LinkedList");

const ll = new LinkedList();

ll.insert(1);
ll.insert(2);

console.log(ll);

module.exports = LinkedList;
