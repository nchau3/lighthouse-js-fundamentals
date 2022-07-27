function howManyHundreds (num) {
  let answer = 0
  if (num < 100) {
    answer = 0;
  }
  else if (num >= 100) {
    answer = num / 100;
    answer = Math.floor(answer);
  } return answer;
}

console.log(howManyHundreds(6557));