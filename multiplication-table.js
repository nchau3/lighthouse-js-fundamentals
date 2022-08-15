const multiplicationTable = function(maxValue) {
  let table = '';
  let x = 0;
  let y = 0;
  // y axis outer loop
  for (y = 1; y <= maxValue; y++) { 
    // x axis inner loop
    for (x = 1; x <= maxValue; x++) {
      if (x < maxValue) {
        table = table + (x * y) + ' ';
      } else if (x === maxValue && y != maxValue) {
        table = table + (x * y) + '\n';
      } else if (x === maxValue && y === maxValue) {
        table = table + (x * y);
      }
    }
  } return table;
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));