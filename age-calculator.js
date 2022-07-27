function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Nicholas", 1993, 2022));