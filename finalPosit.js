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

const finalPosition = function(moves) {
  const position = [0, 0];
  //let x = position[0];
  //let y = position[1];
  for (move in moves) {
    if (moves[move] === "north") {
      position[1]++;
      //console.log("north")
    } else if (moves[move] === "south") {
      position[1]--;
      //console.log("south")
    } else if (moves[move] === "west") {
      position[0]--;
      //console.log("west")
    } else if (moves[move] === "east") {
      position[0]++;
      //console.log("east")
    }
  }
  return position;
};

console.log(finalPosition(moves));

/*
function finalPosition(moves) {
  const position = [0, 0];
  //let x = position[0];
  //let y = position[1];
  for (var move in moves) {
    if (move === "north") {
      //position[1]++
      console.log("north")
    } else if (move === "south") {
     //position[1]--
     console.log("south")
    } else if (move === "west"){
      //position[0]--
      console.log("west")
    }else if (move === "east"){
      //position[0]++
      console.log("east")
    }
  }
  return position
}
*/

