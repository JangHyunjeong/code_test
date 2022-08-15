const input = require('fs').readFileSync('input.txt').toString();
//const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const year = parseInt(input);

// 불기와 서기 연도는 -543 차이가난다
// 불기 - 543 한 식을 작성해준다.
console.log(year-543);