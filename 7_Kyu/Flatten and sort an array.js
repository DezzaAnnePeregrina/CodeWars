/*Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].*/


//Solution 1:

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a,b) => a-b)
}


//Solution 2:

"use strict";

function flattenAndSort(array) {
 
  return [].concat(...array).sort((a,b) => a-b)
}
