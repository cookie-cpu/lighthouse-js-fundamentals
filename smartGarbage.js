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



function smartGarbage(trash, bins){
  if(trash === 'waste'){
    console.log('waste')
  } else if (trash === 'recycling'){
    console.log('recycling')
  } else if (trash === 'compost'){
    console.log('compost')
  }  
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });



/* TEST CASES




//returns
{
  waste: 4,
  recycling: 3,
  compost: 5
}


*/