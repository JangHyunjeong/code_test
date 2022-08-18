let input = require('fs').readFileSync('input.txt').toString().split('\n');
const total = parseInt(input[0]);
const count = parseInt(input[1]);
let totalArr = [];
let calcTotal = 0;
for(i=2; i<=count+1; i++) {
    totalArr.push(parseInt(input[i].split(' ')[0]) * parseInt(input[i].split(' ')[1]));
}
totalArr.forEach(function(item){
    calcTotal += item;
});
if(calcTotal == total) {
    console.log('Yes');
} else {
    console.log('No');
}
// 문제를 잘못읽어서 푸는데 한참 걸렸다!
// count 값을 잘 구하자. count 값은 4가 아니지!! 