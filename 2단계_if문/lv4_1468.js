let input = require('fs').readFileSync('예제.txt').toString().split('\n');;
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const x = parseInt(input[0]);
const y = parseInt(input[1]);

if(x>0 && y>0) {
    console.log('1');
} 
if(x<0 && y>0) {
    console.log('2');
} 
if(x<0 && y<0) {
    console.log('3');
} 
if(x>0 && y<0) {
    console.log('4');
}