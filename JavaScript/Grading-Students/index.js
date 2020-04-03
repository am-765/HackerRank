function gradingStudents(grades) {
  let rounding = grades.map(a => Math.ceil(a / 5) * 5);
  return grades.map((a, b) => {
    return rounding[b] - a < 3 ? (rounding[b] > 39 ? rounding[b] : a) : a
  }, rounding)
}

console.log(gradingStudents([73, 67, 38, 33]));
