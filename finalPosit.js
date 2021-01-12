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
  //let x = position[0];
  //let y = position[1];


  for (var move in moves) {
    if (move === "north") {
      position[1]++
    } else if (move === "south") {
      position[1]--
    } else if (move === "west"){
      position[0]--
    }else if (move === "east"){
      position[0]++
    }
  }
  return position
}


console.log(finalPosition(moves))
