const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
];

const chooseStations = function (stations) {
  const goodStations = [];  
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const venue = station[2];
      if (venue === 'community centre' || venue === 'school') {
        goodStations.push(station[0]);
      }
    } 
  } return goodStations;
};
console.log(chooseStations(stations));