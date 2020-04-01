function birthdayCakeCandles(ar) {
  let maxValue = ar.reduce((a, b) => Math.max(a, b));
  return ar.filter(a => a === maxValue).length
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
