/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/


//Solution 1:
// complete the function
function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
}


//Solution 2:
// complete the function
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}
