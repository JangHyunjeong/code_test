let input = require('fs').readFileSync('input.txt').toString().split('\n');

const score = parseInt(input[0]);

if(score < 60){
    console.log('F');
} else if(score < 70) {
    console.log('D');
} else if(score < 80) {
    console.log('C');
} else if(score < 90) {
    console.log('B');
} else {
    console.log('A');
}