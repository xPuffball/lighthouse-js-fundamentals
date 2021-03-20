const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
function coordLoc(moves){
  basePos = [0, 0];
  for(let move of moves){
    if(move === "north"){
      basePos[1]++;
    }
    else if(move === "east"){
      basePos[0]++;
    }
    else if(move === "south"){
      basePos[1]--;
    }
    else if(move === "west"){
      basePos[0]--;
    }
  }
  return basePos;
}
console.log(coordLoc(moves))