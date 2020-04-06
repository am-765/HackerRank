function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleLen = apples.map(el => a + el).filter(el => s <= el && el <= t).length.toString();
  let orangeLen = oranges.map(el => b + el).filter(el => s <= el && el <= t).length.toString();
  console.log(appleLen + '\n' + orangeLen);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
