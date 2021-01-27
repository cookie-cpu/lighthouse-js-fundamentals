/*
Elementary School if age is below 13
Secondary School if age is between 13 and 18(both inclusive)
Lighthouse Labs in all other cases.
*/

/*
function whichSchool(age) {
  if (age <= 13) {
    console.log("Elementary School")
  } else if (age > 13 && age < 18) {
    console.log("Secondary School")
  } else if (age > 18){
    console.log("Lighthouse Labs")
  }
}
*/

function whichSchool(age) {
  if (age <= 12) {
    console.log("Elementary School")
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary School")
  } else {
    console.log("Lighthouse Labs")
  }
}

whichSchool(0)
whichSchool(1)
whichSchool(12)
whichSchool(13)
whichSchool(17)
whichSchool(18)
whichSchool(20)