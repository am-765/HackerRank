'use strict';

function compareTriplets(a, b) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? score[0]++ : (a[i] < b[i] ? score[1]++ : '')
  }

  return score;
}

// function compareTriplets(a, b) {
//   let score = [0, 0];

//   for (let i = 0; i < a.length; i++) {
//     a[i] > b[i] ? score[0]++ : (a[i] < b[i] ? score[1]++ : '') ;
//   }

//   return score;
// }

console.log(compareTriplets([5,6,7], [3,6,10]));
