/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.*/


//Solution 1
function isVow(a){
 return a.map(x => x === 97 || x === 101 || x === 105 || x === 111 || x === 117 ?
  String.fromCharCode(x) : x)
}


//Solution 2
function isVow(a){
  let vow = ['a','e','i','o','u']
 return a.map(x => vow.includes(String.fromCharCode(x)) ? String.fromCharCode(x) : x)
}
