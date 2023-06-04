/*
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".*/



function getDrinkByProfession(param){
  let w = param.toLowerCase()
  return w === 'jabroni' ? 'Patron Tequila' :
  w === 'school counselor' ? 'Anything with Alcohol' :
  w === 'programmer' ? 'Hipster Craft Beer' :
  w === 'bike gang member' ? 'Moonshine' :
  w === 'politician' ? 'Your tax dollars' :
  w === 'rapper' ? 'Cristal' :
  'Beer'
}
