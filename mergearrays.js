/*

when given two sorted arrays containing numbers, 

returns a sorted array of the numbers from both lists.
*/

function merge(arr1, arr2) {
  let output = [];
  if (arr1 == undefined && arr2 == undefined) {
    return output;
  } else {
    let joined = arr1.concat(arr2);
    let sorted = joined.sort();
    return sorted
  }
}


//Test Cases
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);