/* //TODO

Define a function called concat
The function should, when given two arrays, concatenate the arrays together.

concat([ 1, 2, 3 ], [ 4, 5, 6 ]); //output [ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]); //output [ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]); //output [ 9, 7, 2 ]
concat([ 5, 10 ], []); //output [ 5, 10 ]

(arr1.length < 1 || arr1 == undefined || arr2.length < 1 || arr2 == undefined)
*/


function concat(arr1, arr2){
  let output = [];
  if (arr1 == undefined && arr2 == undefined){
    return output
  } else {
    let joined = arr1.concat(arr2)
    return joined
  }
}

//TEST CASES
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

