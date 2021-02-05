/* TODO
    Write a loop under each comment in the file.
    Under the first, write a while loop that prints out each item of ingredients.
    Under the second, write a for loop that does the same thing.
    And under the third, write any loop, while or for that prints out each item of ingredients but backwards
    (that is, the first should be "bananas" and the last "eggs").
*/


//Array declaration
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


// Write a while loop that prints out the contents of ingredients:

let i = 0;                                    //creates an index for loop condition
while (i < ingredients.length) {              //condition checks if index is higher than number of array items
  console.log(ingredients[i]);                 // prints the array item at the index to the console
  i++;                                       //increases the index
}


// Write a for loop that prints out the contents of ingredients:

for (i = 0; i <= ingredients.length; i++) {
  console.log(ingredients[i]);

}



// Write any loop (while or for) that prints out the contents of ingredients backwards:

let reverse = ingredients.reverse();
for (i = 0; i <= reverse.length; i++) {
  console.log(reverse[i]);

}


/*

//Previous Attempts

let x = 0;
while (x < ingredients.length) {
  reverse = ingredients.reverse()
  
} console.log(reverse[i])


for (i = 7; i >= ingredients.length; i--) {
  console.log(ingredients[i])

}
*/

