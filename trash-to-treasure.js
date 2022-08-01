const smartGarbage = function (trash, bins) {
  if (trash === "waste") {
    bins.waste += 1;
    return bins;
  }
  else if (trash === "recycling") {
    bins.recycling += 1;
    return bins;
  }
  else if (trash === "compost") {
    bins.compost += 1;
    return bins;
  }
}

console.log(smartGarbage("compost", {waste: 3, recycling: 4, compost: 6}));

