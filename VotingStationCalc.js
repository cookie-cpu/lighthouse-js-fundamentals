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
  const acceptable = [];

  for (const station of stations) {

    const capacity = station[1]

    if (capacity >= 20) {

      const type = station[2]
      if (type === 'school' || type === 'community centre') {
        acceptable.push(station[0])

      }
    }
  }
  return acceptable
}



console.log(chooseStations(stations));