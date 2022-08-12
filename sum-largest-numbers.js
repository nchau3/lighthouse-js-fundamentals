const sumLargestNumbers = function(data) {
  let twoLargest = [];
  let j = 0;
  let k = 0;
  //find highest value
  for (let i = 0; i < data.length; i++) {
    if (data[j] < data[i]) {
      j = i;
    }
  }
  //push highest value to empty array, remove it from original, run again
  twoLargest.push(data[j]);
  data.splice(j, 1);
  for (let i = 0; i < data.length; i++) {
    if (data[k] < data[i]) {
      k = i;
    }
  } 
  twoLargest.push(data[k]);
  return twoLargest[0] + twoLargest[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));