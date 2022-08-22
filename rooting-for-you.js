const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 13,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 16,
    plumpness: 3
  },
  {
    submitter: 'Farmer Man',
    redness: 14,
    plumpness: 6
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let j = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[j][metric] < vegetables[i][metric]) {
      j = i;
    } 
  } return vegetables[j].submitter;
}

console.log(judgeVegetable(vegetables, metric));
