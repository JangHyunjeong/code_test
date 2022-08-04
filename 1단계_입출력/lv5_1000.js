// #1. 파일 입출력 시스템을 구현하기 위해 아래 코드 작성
// 01. node.js의 파일 시스템으로 , input.txt파일을 읽는다.
// 02. string형태로 추출하며, 공백( )단위로 절단한다.  :: 해당영역은 입력을 어떻게 하는지에 따라 분절 단위를 달리한다. 
const input = require('fs').readFileSync('input.txt').toString().split(' ');

// 02-01. 백준에 제출할때는, 파일 경로를 그들의 경로(/dev/stdin)로 바꾸어 써야함.
//const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');


// 03. 위에서 절단한 배열의 첫번째 값을 A에 저장
const A = parseInt(input[0]);
// 04. 위에서 절단한 배열의 첫번째 값을 B에 저장
const B = parseInt(input[1]);

console.log(A+B);
