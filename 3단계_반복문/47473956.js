let num = parseInt(require('fs').readFileSync('input.txt').toString());
let numArr = [];
for(i=1; i<=num; i++) {
    numArr.push(i);
}
let calcArr =0;
numArr.forEach(function(item){
    calcArr += item;
});
console.log(calcArr);