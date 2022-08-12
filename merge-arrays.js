const merge = function (array1, array2) {
  let combinedArray = [];
  if ((array1.length > 0) || (array2.length > 0)) {
    for (let i = 0; i <= array1.length - 1; i++) {
      combinedArray.push(array1[i]);
    }
    for (let i = 0; i <= array2.length - 1; i++) {
      combinedArray.push(array2[i]);
    }
  } combinedArray.sort();
  return combinedArray;
}  

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);