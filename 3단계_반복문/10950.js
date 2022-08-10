let input = require('fs').readFileSync('input.txt').toString().split('\n');
for(i=0; i<input.length; i++){
    let calcTarget = input[i].split(' ');
    let a = parseInt(calcTarget[0]);
    let b = parseInt(calcTarget[1]);
    
    if(calcTarget.length == 2) {
        console.log(a+b);
    }
}