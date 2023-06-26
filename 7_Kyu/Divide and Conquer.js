/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/


function divCon(x){
  return x.reduce((a, b) => typeof b == "number" ? a + b : a - Number(b), 0)
}
