// 첫번재 시도 -> 시간초과가 계속 뜬다.
// let input = require('fs').readFileSync('input.txt').toString().split('\n');
// for(i=1; i<=input[0]; i++){
//     let num = input[i].split(' ');
//     console.log(parseInt(num[0]) + parseInt(num[1]));
// }


// 두번째 시도 -> 출력문을 따로 출력
let input = require('fs').readFileSync('input.txt').toString().split('\n');
let answer = '';
for(i=1; i<=input[0]; i++){
    let num = input[i].split(' ');
    answer += Number(num[0])+Number(num[1])+'\n';
}
console.log(answer);