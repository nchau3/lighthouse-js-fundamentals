const urlEncode = function(text) {
  encodedString = '';
  for (let i = 0; i < text.length; i++) {
    if ((i > 0) && (i < text.length - 1) && (text[i] === ' ')) {
      encodedString = encodedString + '%20';
    } else if (text[i] !== ' ') {
      encodedString = encodedString + text[i];
    }
  } return encodedString;
}

console.log(urlEncode(' 1 '));
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));