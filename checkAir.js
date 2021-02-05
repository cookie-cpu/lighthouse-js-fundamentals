const checkAir = function(samples, threshold) {

  let dirtyNum = 0;
  
  for (aircheck in samples) {
    if (samples[aircheck] === 'dirty') {
      dirtyNum++;
    }
  } if (threshold < dirtyNum / 10) {
    return 'Polluted';
  } else if (threshold > dirtyNum / 10) {
    return 'Clean';
  }
};



//TEST CASES
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
));