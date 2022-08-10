console.log(Number('1234'));  // 결과값 : 1234
console.log(Number('100원')); // 결과값 : NaN
console.log(Number('10.444'));  // 결과값 : 10.444

console.log(parseInt('1234'));  // 결과값 : 1234
console.log(parseInt('가격 : 100')); // 결과값 : NaN
console.log(parseInt('100원')); // 결과값 : 100
console.log(parseInt('10.444'));  // 결과값 : 10

// parseInt 문자 및 소수를 제외한 정수값만 출력