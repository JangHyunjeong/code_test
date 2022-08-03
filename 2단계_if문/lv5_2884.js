let input = require('fs').readFileSync('예제.txt').toString().split(' ');;
//let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const hour = parseInt(input[0]);
const minutes = parseInt(input[1]);
const changeableTime = 45;

const maxHour = 24;
const maxMinutes = 60;
const transMinutes = (hour * 60 + minutes) - changeableTime;
const resultHour = Math.floor(transMinutes/60);
const resultMinutes = Math.floor(transMinutes%60);

if(resultHour>= 0 && resultMinutes >= 0) {
    console.log(resultHour, resultMinutes);
} else if(resultHour< 0 && resultMinutes > 0) {
    console.log(maxHour+resultHour, resultMinutes);
} else if(resultHour> 0 && resultMinutes < 0) {
    console.log(resultHour, maxMinutes+resultMinutes);
} else {
    console.log(maxHour+resultHour, maxMinutes+resultMinutes);
}

// 처음시도 - 실패(0보다 작은 경우의 수를 고려하지 못함)
// 2번째 시도 -> if 문 추가  -> 정답! 
// 마지막 - 변경가능한 수를 변수 처리 / 각 시간의 max값 삽입