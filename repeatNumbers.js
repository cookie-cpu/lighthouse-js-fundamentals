const repeatNumbers = function(data) {
  let output = ''; //inits string so vals are concat not summed
  for (let i = 0; i < data.length; i++){ //loops through array elements
    if (i > 0){
      output += ', '; //creates a comma and space after each where the index is 0 again
    }
    for (let j = 0; j < data[i][1]; j++){ //Loops through as many times as the second array value dictates
      output += data[i][0] //Pushes the value to the string each loop
    } //console.log(data[i][i])
  } return output;
};


//TEST CASES
console.log(repeatNumbers([[1, 10]])); // => 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // => 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // => 10101010, 343434343434, 9292

 



