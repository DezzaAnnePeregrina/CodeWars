/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398*/


function sum (numbers) {
    let addition = 0
  for(let i = 0; i < numbers.length; i++){
    addition += numbers[i]
}return addition}
