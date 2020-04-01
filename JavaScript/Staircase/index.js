function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = [...Array(n - i)].map(a => ' ');
    let hashs = [...Array(i)].map(a => '#');
    console.log([...spaces, ...hashs].join(''))
  }
}

staircase(6);
