const makeCase = function(input, caseInput) {
  let convertedString = '';
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
  };

  const pascalCase = function (input) {
    let newString = input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] != ' ') {
        newString = newString + input[i];
      } else if (input[i] === ' ') {
        newString = newString + input[i + 1].toUpperCase();
        i = i + 1;
      }
    } return newString;
  };

  const snakeCase = function (input) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] != ' ') {
        newString = newString + input[i];
      } else if (input[i] === ' ') {
        newString = newString + "_";
      }
    } return newString;
  };

  const kebabCase = function (input) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] != ' ') {
        newString = newString + input[i];
      } else if (input[i] === ' ') {
        newString = newString + "-";
      }
    } return newString;
  };

  const titleCase = function (input) {
    let newString = input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] != ' ') {
        newString = newString + input[i];
      } else if (input[i] === ' ') {
        newString = newString + ' ' + input[i + 1].toUpperCase();
        i = i + 1;
      }
    } return newString;
  };
  
  const vowelCase = function (input) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        newString = newString + input[i].toUpperCase();
      } else {
        newString = newString + input[i];
      }
    } return newString;
  };

  const consonantCase = function (input) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        newString = newString + input[i]
      } else {
        newString = newString + input[i].toUpperCase();
      }
    } return newString;
  };

  const upperCase = function (input) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      newString = newString + input[i].toUpperCase();
    } return newString;
  };
  
  const lowerCase = function (input) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      newString = newString + input[i].toLowerCase();
    } return newString;
  };  

  if (Array.isArray(caseInput)) {
    for (let i = 0; i <= caseInput.length; i++) {
      switch (caseInput[i]) {
        case "camel":
          convertedString = camelCase(input);
          input = convertedString;
          break;
        case "pascal":
          convertedString = pascalCase(input);
          input = convertedString;
          break;
        case "snake":
          convertedString = snakeCase(input);
          input = convertedString;
          break;
        case "kebab":
          convertedString = kebabCase(input);
          input = convertedString;
          break;
        case "title":
          convertedString = titleCase(input);
          input = convertedString;
          break;
        case "vowel":
          convertedString = vowelCase(input);
          input = convertedString;
          break;
        case "consonant":
          convertedString = consonantCase(input);
          input = convertedString;
          break;
        case "upper":
          convertedString = upperCase(input);
          input = convertedString;
          break;
        case "lower":
          convertedSting = lowerCase(input);
          input = convertedString;
          break;
      }
    }
  } else {
    switch (caseInput) {
      case "camel":
        convertedString = camelCase(input);
        break;
      case "pascal":
        convertedString = pascalCase(input);
        break;
      case "snake":
        convertedString = snakeCase(input);
        break;
      case "kebab":
        convertedString = kebabCase(input);
        break;
      case "title":
        convertedString = titleCase(input);
        break;
      case "vowel":
        convertedString = vowelCase(input);
        break;
      case "consonant":
        convertedString = consonantCase(input);
        break;
      case "upper":
        convertedString = upperCase(input);
        break;
      case "lower":
        convertedSting = lowerCase(input);
        break;
    }
  } return convertedString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));