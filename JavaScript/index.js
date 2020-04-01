// function getOdd(...word) {
//   word = String(word).split(',').map(Number);
//   let oddArr = word.filter((el, i) => i % 2)
//   let seqVal = word.filter((el, i) => el === word[i + 1]);
//   let result = [...oddArr, ...seqVal].sort().join(',');
// }

// console.log(getOdd(1,2,3,4,4,6,7))

// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// var lines = [];
// var reader = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// reader.on('line', (line) => {
//     lines.push(line);
// });
// reader.on('close', () => {
//     console.log("hello " + lines[0]);
//     console.log("hello " + lines[1]);
//      console.log("hello " + lines[2]);
// });

process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
    input_string += chunk;
});

process.stdin.on('end', function() {
    const lines = input_string.split("\n");
    const first_line = lines[0];
    console.log(first_line);
});

// var lines = [];
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', function(line) {
//   lines.push(line);
// });
// reader.on('close', function() {
//   for(var i = 0; i < lines.length; i++) {
//     console.log(i + ') ' + lines[i]);
//   }
// });
