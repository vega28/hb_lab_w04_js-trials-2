"use strict";


// 1. printIndices()
// Print each item and its corresponding index
// 
// Ex.:
//   > printIndices(['apple', 'berry', 'cherry']);
//   apple 0
//   berry 1
//   cherry 2
// 
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem()
// Print a list of every other item in `items`
//     Start with index 0.
//     Arguments:
//         items (list)
// 
// Ex.:
//   > everyOtherItem([66, 77, 1010, 12])
//   [66, 1010]
// 
function everyOtherItem(items) {
  let result = []
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}


// 3. smallestNItems()
//    Print a list of the `n` smallest integers in `items`.
//     Order the integers in descending order.
//     You can assume that `n` will be less than the length of the list.
//     Arguments:
//         items (list[int]): A list of integers
//         n (int): Desired length for the resulting list
// 
// Ex.:
//   > smallestNItems([1, 30, 4, 21, 100000], 2)
//   [4, 1]
// 
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  items = items.slice(0,n);
  items.reverse()
  console.log(items);
}
