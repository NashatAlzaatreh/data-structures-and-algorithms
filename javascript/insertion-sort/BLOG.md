# Insertion Sort

##### Insertion Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Whiteboard Process

![whiteboard](./WB-insertionSort.PNG)

### Pseudocode

```js
insertionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;

```

### code

```js
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
```

### BigO

- Space : O(1) : the same array length
- Time: O(n^2) : Tow `for` loop

### Tests

[inserionSort.test.js](./__test__/inserionSort.test.js)
![tests](./insertionSortTests.PNG)
