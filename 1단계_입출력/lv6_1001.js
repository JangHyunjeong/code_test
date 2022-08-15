const input = require('fs').readFileSync('input.txt').toString().split(' ');
//백준에 제출할때는, 파일 경로를 그들의 경로(/dev/stdin)로 바꾸어 써야함.
//const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A-B);