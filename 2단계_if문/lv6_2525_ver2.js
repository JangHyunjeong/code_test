let input = require('fs').readFileSync('input.txt').toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const time = input[0].split(' ');
const hour = parseInt(time[0]);
const min = parseInt(time[1]);
const settingTime = parseInt(input[1]);

let resultMin = 0;
let resultHour = 0;

resultHour = hour + parseInt(settingTime/60);
resultMin = min + parseInt(settingTime % 60);

if(resultMin >= 60 ) {
    resultHour = resultHour + parseInt(resultMin/60);
}
if(resultMin >= 60) {
    resultMin = resultMin - 60;
}
if(resultHour >= 24) {
    resultHour = resultHour - 24;
}
console.log(`${resultHour} ${resultMin}`);
