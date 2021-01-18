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




let array = [];

function range(start, end, step) {

    if (start === undefined || end === undefined || step === undefined) {
        return array
    } else if (start > end){
        return array
    } else if (step <=0){
        return arr
    } else {
        for (i=0; i<= end; i++){




            
        }
    }

}







//Test Cases
/*
console.log(range()) //output undefined
console.log(range(0, 10, 2)); //output [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); //output [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3));   //output [ -5, -2, 1 ]
*/