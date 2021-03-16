"use strict";


// 1. printIndices
// Print each item and its corresponding index
// 
// Ex.:
//   > printIndices(['apple', 'berry', 'cherry'])
//   apple 0
//   berry 1
//   cherry 2
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
// const items = [66, 77, 1010, 12]
// [66, 1010]

function everyOtherItem(items) {
  let result = []

  for (const i in items.length) {
    console.log(i)
    if (i % 2 === 0);
      console.log(`HELLO FROM THE IF BLOCK`)
      result.push(items[i])
  }

  console.log(result)

  // return console.log(result)
}

// result = []

// for i in range(len(items)):
//     if i % 2 == 0:
//         result.append(items[i])

// print(result)



// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
