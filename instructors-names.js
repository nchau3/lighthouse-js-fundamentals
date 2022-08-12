const instructorWithLongestName = function(instructors) {
  let j = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[j].name.length < instructors[i].name.length) {
      j = i;
    }
  } return instructors[j];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

