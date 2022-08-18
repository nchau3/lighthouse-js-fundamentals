const organizeInstructors = function(instructors) {
  let newList = {};
  // push all courses as keys to new object
  for (let i = 0; i < instructors.length; i++) {
    newList[instructors[i].course] = [];
  }
  // compare instructor names to courses, push to corresponding arrays in new object
  let newListEntries = Object.entries(newList);
  for (let i = 0; i < newListEntries.length; i++) {
    for (let j = 0; j < instructors.length; j++) {
      if (instructors[j].course === newListEntries[i][0]) {
        newList[newListEntries[i][0]].push(instructors[j].name);
      }
    }
  } return newList;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));