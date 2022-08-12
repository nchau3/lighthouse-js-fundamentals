const conditionalSum = function(values, condition) {
  
  //function to sum numbers in array
  function add (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    } return sum;
  }

  //push even numbers to separate array and add
  if (condition === "even") {
    let evenArray = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        evenArray.push(values[i]);
      }
    } return add(evenArray);

  //push odd numbers to separate array
  } else if (condition === "odd") {
    let oddArray = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 > 0) {
        oddArray.push(values[i]);
      } 
    } return add(oddArray);
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));