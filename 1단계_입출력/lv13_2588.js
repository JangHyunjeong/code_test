const input = require('fs').readFileSync('input.txt').toString().split('\n');
// .split('\n'); : 줄나눔을 기준으로 문자열을 잘라내므로 split안에 \n(줄나눔 기호)를 넣음
const a = parseInt(input[0]);
// 문자열로 받아온 이후
const b = input[1];
// 숫자를 모두 배열안에 넣어줌
const bArray = b.split('');
// -> bArray = ['3','8','5'];


// 01. 과정 값들
// 역순으로 계산을 해야하기 떄문에
// i = bArray.length-1 => bArray길이 - 1 만큼 (array의 번호가 0부터 매겨지므로 1뺌) 반복하고싶어서 추가
// i >=0  => 2 ~ 0 까지 반복하고 싶어서 추가
// i--  => 2 -> 1 -> 0 이렇게 감소시키며 반복하고싶어서 추가
// 미연의 방지를 위해 parseInt를 사용하여 string -> number 형태로 맞춰주기
for(i=bArray.length-1; i>=0; i--) {
    console.log(typeof(a*parseInt(bArray[i])));
    console.log(a*parseInt(bArray[i]));
}
// 02. 최종 결과값
console.log(a*parseInt(b));
