/*
For this challenge, we'll need to implement a function called judgeVegetable()that will decide which
 vegetable is best based on a given judging characteristic.
  Our function will receive two parameters: a list of veggies(as an array of objects), 
  and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) 
the vegetable with the highest ranking in the provided category.

const judgeVegetable = function (vegetables, metric) {
  let name = vegetables[0].submitter;
  let value = vegetables[0].metric;
  console.log(name)
  console.log(value)
  for (let i =1; i <vegetables.length; i++){
    if (vegetables[i][i] > value){
      name = vegetables[i].submitter;
    }
  } return name
}

const judgeVegetable = function (vegetables, metric) {
  let measure = metric
  return measure
}



  for (i in vegetables) {
    console.log(values[i].submitter)
  }

  const judgeVegetable = function (vegetables, metric){
  //let name = '';
  //let mesasurement = metric;
  const values = Object.values(vegetables);
  console.log(values[0].submitter)


}


const judgeVegetable = function(vegetables, metric){
  let num = 0;
  for (item in vegetables){
    if (vegetables[item][metric] > num){
      return vegetables[item].submitter
    }
  }
}
  
*/




const judgeVegetable = function (vegetables, metric) {
  let value = 0;
  let submitter = '';

  for (let i = 0; i < vegetables.length; i++) {
    if (value < vegetables[i][metric]) {
      value = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter
}

//TEST CASES
const metric = 'redness'
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

console.log(judgeVegetable(vegetables, metric))