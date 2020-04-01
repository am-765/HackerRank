function plusMinus(arr) {
  let counts = [0, 0, 0];
  arr.forEach(el => {
    el > 0 ? counts[0]++ : (el < 0 ? counts[1]++ : counts[2]++)
  })
  return counts.map(a => (a / arr.length).toFixed(6)).join('\n')

  // let positive = arr.filter(number => number > 0).length / arr.length;
  // let negative = arr.filter(number => number < 0).length / arr.length;;
  // let zeronums = arr.filter(number => number == 0).length / arr.length;
  // return positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6)
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
