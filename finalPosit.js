/*

takes moves[n,s,w,e]
start position [0,0]
return final position [-1,4]
north = y++
south = y--
east = x--
west = x++


*/


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ;



function finalPosition(moves){
  const position = [0,0];

  for (var move in moves){
    console.log(moves[move])
  }
}


finalPosition(moves);
