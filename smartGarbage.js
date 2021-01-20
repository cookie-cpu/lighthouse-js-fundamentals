/*
    trash, is a string that will tell our function what type of item is being submitted.
    bins, is an object with three properties (waste, recycling, and compost), which hold numerical value. 
    Our function must increase the correct value in the bins object, 
    and then return the newly updated object.

switch(trash){
    case 'recycling':
      smartGarbage.bins[1]++
      break;

*/


function smartGarbage(trash, bins) {
  if (trash === 'waste') {
    bins.waste++
  } else if (trash === 'recycling') {
    bins.recycling++
  } else if (trash === 'compost') {
    bins.compost++
  } console.log(bins)
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('trash', { waste: 10, recycling: 10, compost: 10 });
smartGarbage('compost', { waste: 9, recycling: 8, compost: 3 });


/* TEST CASES


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

//returns
{
  waste: 4,
  recycling: 3,
  compost: 5
}


*/