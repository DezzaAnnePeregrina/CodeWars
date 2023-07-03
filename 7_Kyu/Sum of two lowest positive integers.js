/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/



Solution 1:
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b) => a-b).slice(0,2).reduce((acc,c) => acc + c,0)
}


Solution 2:
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
