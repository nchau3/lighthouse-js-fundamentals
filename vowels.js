const numberOfVowels = function(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if ((data[i] === 'a') || (data[i] === 'e') || (data[i] === 'i') || (data[i] === 'o') || (data[i] === 'u')) {
      total += 1;
    }
  } return total;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));