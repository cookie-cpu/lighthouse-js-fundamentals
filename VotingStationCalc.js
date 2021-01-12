/*
chooseStations(stations) function
takes in an array of possible voting stations
then only returns the names of the stations that are appropriate
must have a capacity of at least 20, and be a school or community centre.

*/


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(stations) {
  const acceptable = []; //Creates an array to store the name element for acceptable venues

  for (const station of stations) { //loops through each element in the stations[] array

    const capacity = station[1] //defines a variable to handle the capacity element of the array

    if (capacity >= 20) { //check to see if the capacity element is over 20

      const type = station[2] //defines a variable to handle the type of venue
      if (type === 'school' || type === 'community centre') { //check to see if the type element is acceptable
        acceptable.push(station[0]) //this pushes the name element to the acceptable[] array for output

      }
    }
  }
  return acceptable
}



console.log(chooseStations(stations)); //prints the new array of sorted venues for voting