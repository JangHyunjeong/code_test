const input = require('fs').readFileSync('input.txt').toString().trim();
//const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input);
console.log(`${input}??!`);

// 쉽네 ㅋ 하고 풀다가 계속 오류가 생겨서 무엇이 문제일까 찾아봤다. 첫번째 줄에 .trim() 가 빠져있었기 떄문.
// 이와같은 문제를 풀때는 .trim()을 넣어, 혹시모를 양 옆의 공백을 제거해주자
// trim()  : 문자 양 끝의 공백을 제거.
// 공백이란 모든 공백문자와 모든 개행문자를 의미한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim