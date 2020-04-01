function miniMaxSum(arr) {
  let asc = arr.sort().slice(0, 4);
  let des = arr.sort((a, b) => a < b ? 1 : -1).slice(0, 4);

  let minSum = asc.reduce((a, b) => a + b);
  let maxSum = des.reduce((a, b) => a + b);
  console.log(minSum, maxSum);
}

miniMaxSum([5, 5, 5, 5, 5]);
// miniMaxSum([1, 2, 3, 4, 5]);
