/* //TODO
Define a function lastIndexOf

When this function is given an array and a value, 
it should return the index of the last time the value occurs in the array. 
If the value never occurs, the function should return -1.

lastIndexOf([ 0, 1, 4, 1, 2 ], 1); //output 3
lastIndexOf([ 0, 1, 4, 1, 2 ], 2); //output 4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3); //output -1
lastIndexOf([ 5, 5, 5 ], 5); //output 2

JavaScript has a .indexOf function (which does something similar),
 but you may not use it in this exercise.

*/

const lastIndexOf = function (array, num) {
  let sameNum = false;
  let output = 0;
  if (array.length < 1 || array == undefined) {
    return -1
  } else
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === num) {
      output = i;
      sameNum = true;
      break; //breaks the statement so only the last instance is counted
    }
  }
  if (sameNum === true) {
    return output;
  } else {
    return -1;
  }
};



//Test Cases
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);