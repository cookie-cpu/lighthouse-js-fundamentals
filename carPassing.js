/*

carPassing(cars, speed) takes an array of car objects and the speed of a car 

create a new object with a property called speed, 
and another property called time and add it to the cars array. 

We can retrieve the current time, 
for setting the time property, 
by using the Date.now() function, which is built into JavaScript!
*/
const speed = 38
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]


const carPassing = function (cars, speed) {
  time = Date.now();
  cars.push(speed, time)
  console.log(cars)
}






carPassing(cars, speed)
/* //TEST CASES


*/




