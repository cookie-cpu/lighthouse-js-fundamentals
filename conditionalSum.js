/*

given an array of numbers and a condition of odd or even. 
Given this condition, add up only the values which match that condition.
If no values match the condition, return 0.

*/

const isEven  = function (num) {
  return num % 2 === 0;
}
function isOdd(num){
  return num % 2 !=0;
}

const conditionalSum = function(values, condition){
  let number = 0;
  for (i in values){
    if (values[i]%2 === 0 && condition === 'even'){
      number = number+values[i]
    } else if (values[i] %2 !==0 && condition === 'odd'){
      number = number+values[i]
    }
  } return number
}

//TEST CASES
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));



