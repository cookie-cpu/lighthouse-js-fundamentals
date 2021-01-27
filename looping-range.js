/*
//TODO
// Define function range
// Function takes 3 params (start, end, step)
// The function should return an array of numbers from start to end counting by step

The function should return an empty array [] if given incorrect parameters, such as:

    start, end, or step being undefined
    start being greater than end
    step being 0, or negative
*/


function range(start, end, step) {
    let array = [];
    if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
        return array
    } else {
        for (var i = start; i <= end; i = i + step) {
            array.push(i)
        }
    } return array
}





//Test Cases
console.log(range()) //output undefined
console.log(range(0, 10, 2)); //output [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); //output [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3));   //output [ -5, -2, 1 ]
