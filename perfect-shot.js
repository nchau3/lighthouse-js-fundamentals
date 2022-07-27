const moves = ['north', 'north', 'west'];

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'north') {
      y = y + 1;
    } else if (move === 'south') {
      y = y - 1;
    } else if (move === 'east') {
      x = x + 1;
    } else if (move === 'west') {
      x = x - 1;
    }
  } return [x, y];
}

console.log(finalPosition(moves));