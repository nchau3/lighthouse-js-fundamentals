function range (start, end, step) {
  if ((end) && (step) && (start < end) && (step > 0)) {
    let list = [];  
    while (start <= end) {
      list.push(start);
      start += step;
    } return list;
  } else {
    let list = [];
    return list;
  }
}

console.log(range(0, 14, 2));
