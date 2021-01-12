/*

takes moves[n,s,w,e]
start position [0,0]
return final position [-1,4]
north = y++
south = y--
east = x--
west = x++

*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];


function finalPosition(moves) {
  const position = [0, 0];
  let x = position[0];
  let y = position[1];


  for (var move in moves) {
    if (move === "north") {
      y++
    } else if (move === "south") {
      y--
    } else if (move === "west"){
      x--
    }else if (move === "east"){
      x++
    }
  }
  return position
}


console.log(finalPosition(moves))


//console.log(moves[move]