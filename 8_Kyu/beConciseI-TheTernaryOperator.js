/*64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

I'll give you a few hints:

The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
Write everything in one line, \n and other whitespaces counts.
Whatever you do, do not change what the function does. Good luck :)*/

const describeAge=g=>{
 let s="You're a(n)"
  return g<13?
    `${s} kid` :
  g<18?
    `${s} teenager` :
  g<65?
    `${s} adult` :

    `${s} elderly`

}
