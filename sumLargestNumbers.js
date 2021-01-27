/*
given an array of 2 or more numbers
find the two largest numbers in that array
sum them together
*/

const sumLargestNumbers = function(data) {
  for (i in data){
    Math.max(data, data[i])





    //console.log(data[i])
  }
};



//TEST CASES
console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3]));
//console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

