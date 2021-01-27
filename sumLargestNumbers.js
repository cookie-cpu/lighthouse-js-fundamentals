/*
given an array of 2 or more numbers
find the two largest numbers in that array
sum them together
*/

const sumLargestNumbers = function(data) {
  let num1 = Math.max(...data); //assigns num1 to the largest number in the array
  data.splice(data.indexOf(num1), 1); //removes the number from the array
  let num2 = Math.max(...data); //assigns num2 to the next largest number in the array
 return num1 + num2; //returns the 2 highest values added together
}


//TEST CASES
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

