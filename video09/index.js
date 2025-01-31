// loops

// for(let i = 0; i < 20; i++){
//     // i = 0 and given no. 20 then output will be from 0 to n-1 (0 to 19)
//     console.log(i);
// } 

// below code use for factorial

let factorial = 1;
let n = 6;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);

// program to add first p natural numbers 
let sum = 0 ;
let p = 15;
for(let i = 1; i <= p; i++){
    sum += i
    // console.log(i);
}
console.log('sum of first' + p + 'numbers is: ' + sum);


let obj = {
    shubham : 25,
    dipti: 76,
    akash: 69,
}
console.log(obj);
for (const a in obj) {
    
    console.log("the marks of " + a + " is: " + obj[a]);
}