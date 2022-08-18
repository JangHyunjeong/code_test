let numArray = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);
const num1 = numArray[0];
const num2 = numArray[1];
const num3 = numArray[2];
const setNumArray = new Set(numArray);
if(setNumArray.size == 3) {
    console.log(Math.max(...numArray) * 100);
} else if (setNumArray.size == 2) {
    if(num1 == num2 || num1 == num3) {
        console.log(1000+num1*100);
    } else {
        console.log(1000+num2*100);
    }
} else {
    console.log(10000+num1*1000);
}

// 이번에 안것
// 01. 최대값 찾기 - Math.max
// 02. 전개 연산자
//Spread Operator(전개 연산자)를 이용하면 배열의 모든 요소를 쉽게 함수의 인자로 전달할 수 있습니다. Spread Operator는 ...arr와 같은 표현식이며, 배열 arr의 모든 요소를 나열하여 인자로 전달합니다.
// 03. 배열에서 중복 제외하기 - set()

