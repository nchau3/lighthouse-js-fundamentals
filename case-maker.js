const camelCase = function (input) {
  let newString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] != ' ') {
      newString = newString + input[i];
    } else if (input[i] === ' ') {
      newString = newString + input[i + 1].toUpperCase();
      i = i + 1;
    }
  } return newString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));