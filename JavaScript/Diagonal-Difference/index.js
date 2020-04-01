'use strict';

function diagonalDifference(arr) {

  let primarySum = 0,
  secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i];
    secondarySum += arr[arr.length - 1 - i][i];
  }

  return Math.abs(primarySum - secondarySum);

}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
