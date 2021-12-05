"use strict";

const insertionSort = (arr) => {
  const arrLength = arr.length;
  let temp;
  for (let i = 0; i < arrLength - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
module.exports = insertionSort;
