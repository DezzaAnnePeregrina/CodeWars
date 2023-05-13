/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/


function bmi(weight, height) {
  let i = weight/(height * height)
  if(i <= 18.5){
    return 'Underweight'
  } else if (i <= 25.0){
    return 'Normal'
  } else if (i <= 30.0){
    return 'Overweight'
  } else if (i > 30){
    return 'Obese'
  } 
}
