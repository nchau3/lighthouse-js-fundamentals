const repeatNumbers = function (data) {
  let output = '';
  let valueArray = [];

  // create string based on input
  const createString = function (data) {
    let value = '';
      for (let j = 0; j < data[1]; j++) {
        value = value + data[0];
      } return value;
  };

  // push all strings into empty array
  for (i = 0; i < data.length; i++) {
    valueArray.push(createString(data[i]));
  } 

  // convert array to string with commas as needed
  if (valueArray.length === 1) {
    output = valueArray[0];
    return output;
  } else if (valueArray.length > 1) {
    for (let i = 0; i < valueArray.length; i++) {
      if (i < valueArray.length - 1) {
        output = output + valueArray[i] + ", ";
      } else {
        output = output + valueArray[i];
      }
    } return output;
  }
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));