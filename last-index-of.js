function lastIndexOf (array, value) {
  const length = array.length - 1;
  for (let i = length; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }  if ((length === -1) || (array[0] !== value)) {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);

console.log(lastIndexOf([], 3), "=?", -1);