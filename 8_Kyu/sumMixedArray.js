/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/


//Solution 1
function sumMix(x){
 return x.map(a => +a).reduce((a,b) => a + b)
}


//Solution 2
function sumMix(x){

 return x.reduce((a,b) => Number(a) + Number(b) ,0)
}
