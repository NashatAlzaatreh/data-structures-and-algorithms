const QuickSort = require("../quick-sort");

describe("Quick Sort test", () => {
  it("correct sorting", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let sortedArr = [4, 8, 15, 16, 23, 42];
    expect(QuickSort(arr, 0, arr.length - 1)).toEqual(sortedArr);
  });

  it("sorting: Few uniques", () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let sortedArr = [5, 5, 5, 7, 7, 12];
    expect(QuickSort(arr, 0, arr.length - 1)).toEqual(sortedArr);
  });

  it("sorting: Reverse-sorted", () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let sortedArr = [-2, 5, 8, 12, 18, 20];
    expect(QuickSort(arr, 0, arr.length - 1)).toEqual(sortedArr);
  });

  it("sorting: Nearly-sorted", () => {
    let arr = [2, 3, 5, 7, 13, 11];
    let sortedArr = [2, 3, 5, 7, 11, 13];
    expect(QuickSort(arr, 0, arr.length - 1)).toEqual(sortedArr);
  });
});
