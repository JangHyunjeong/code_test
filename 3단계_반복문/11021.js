const input = require('fs').readFileSync('input.txt').toString().split('\n');
const max = parseInt(input[0]);
for(i=1; i<=max; i++) {
    let calcArr =  input[i].split(' ');
    console.log(`Case #${i}: ${parseInt(calcArr[0]) + parseInt(calcArr[1])}`);
}