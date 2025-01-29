//let a = prompt("hey whats your age?")  // the output of prompt is in string 
// to convert it from string to number
// a = Number.parseInt(a)
// console.log(a);

// let a = prompt("hey whats your age?")
// let a = -15
// // if statement
// if(a > 18){
//     console.log("you can drive.")
// }

// // if else 
// if(a > 0){
//     console.log("you can drive.");
// }
// else{
//     console.log("this is an invalid age");
// }

// if else if statement
let a = 19;
if(a < 0){
    console.log('this is invalid age');
}else if(a > 0 && a < 9){
    console.log('you are a kid. stay in your pant');
}else if(a >=9 && a <= 18){
    console.log('your a teenager, you can drive after 18');
}else{
    console.log('you can drive');
}

// let's learn switch statement
let fruit = 'oranges'
switch (fruit) {
    case 'papaya':
        console.log('$50/kg');
        break;
    case 'mango':
        console.log('$60/kg');
        break;
    case 'oranges':
        console.log('$30/kg');
        break;

    default:
        console.log("sorry, we don't have a ${fruit}");
        break;
}


// ternary operator
let age = 12
console.log('you can', age >18? "drive": "not drive");