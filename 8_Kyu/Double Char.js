/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "*/


Solution 1:
function doubleChar(str) {
  let i = ""
  str.split('').forEach(a => i += a + a)
  return i
}


Solution 2:
function doubleChar(str) {
  return str.split('').map(i => i + i).join('')
}
