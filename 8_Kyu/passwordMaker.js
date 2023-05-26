/*One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"*/


function makePassword(phrase) {
  let s = phrase.replace(/[iI]/gi,1).replace(/[oO]/gi,0).replace(/[sS]/gi,5).split(' ')
  let pass = []
  for(let i = 0; i < s.length; i++){
    pass.push(s[i][0])
}return pass.join('')}
