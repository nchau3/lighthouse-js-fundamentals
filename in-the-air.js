const checkAir = function (samples, threshold) {
  let dirtyCount = 0 
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtyCount += 1;
    }
  }
  if (dirtyCount / samples.length > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))