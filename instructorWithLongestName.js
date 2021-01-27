
/*
const instructorWithLongestName = function(instructors) {
  for (i in instructors)
console.log(instructors[i])
};
*/


const instructorWithLongestName = function (instructors) {
  let index = 0;
  let num = 0;
  for (i in instructors) {
    if (num < instructors[i].name.length) {
      num = instructors[i].name.length;
      index = i;
    }
  }
  return (instructors[index]);
}



//TEST CASES
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
