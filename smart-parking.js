const whereCanIPark = function (spots, vehicle) {
  let openSpot = [];
  if ((vehicle === 'regular') || (vehicle === 'small') || (vehicle === 'motorcycle')) {
    for (y = 0; y < spots.length; y++) {
      for (x = 0; x < spots[y].length; x++) {
        if (spots[y][x] === 'R') {
          openSpot = [x, y];
          return openSpot;
        }
        else if ((spots[y][x] === 'S') && ((vehicle === 'small') || (vehicle === 'motorcycle'))) {
          openSpot = [x, y];
          return openSpot;
        }
        else if ((spots[y][x] === 'M') && (vehicle === 'motorcycle')) {
          openSpot = [x, y];
          return openSpot;
        } else {
          openSpot = false;
        }
      }
    } return openSpot;
  }
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))