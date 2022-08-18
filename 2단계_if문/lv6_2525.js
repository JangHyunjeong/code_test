let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const time = input[0].split(' ');
const hour = parseInt(time[0]);
const min = parseInt(time[1]);
const settingTime = parseInt(input[1]);
const transMin = hour * 60 + min;
const resultTime = transMin + settingTime;
let resultHour = Math.floor(resultTime/60);
if(resultHour < 24) {
    resultHour = resultHour;
} else if(resultHour == 24) {
   resultHour = 0;
} else {
    resultHour = resultHour - 24;
}
const resultMin = parseInt(resultTime%60);
console.log(`${resultHour} ${resultMin}`);


// line9 : Math.floor 와 parseInt 의 차이? 
// 음수일때 올림