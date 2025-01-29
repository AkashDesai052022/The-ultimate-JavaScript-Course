// chapter 2 : Practice set 

// question no. 1 : Use logical operator to find whether the age of a person lies between 10 and 20. 

// let age = prompt('enter your age: ')
let age = 15;
if(age > 10 && age < 20){
    console.log('your age is lies between 10 and 20');
}else{
    console.log('your age is not lies between 10 and 20');
}

// question no. 2 : Demonstrate the use of switch case statement in JS

const country = "b"
switch (country) {
    case 'USA':
        console.log('United States of America');
        break;
    case 'IN':
        console.log('India');
        break;
    case 'PAK':
        console.log('Pakistan');
        break;
    case 'UAE':
        console.log('United Arab Emirates');
        break;
    default:
        console.log('sorry, this given country code is not in our database');
        break;
}

// question no. 3 : Write a JS program to find whether the number is divisible by 2 and 3.

let num = prompt('enter a number:')
if(num % 2 == 0 && num% 3 == 0){
    console.log('given number is divisible by 2 and 3');
}else {
    console.log('given number is not divisible by 2 and 3');
}

// question no. 4 : Write a JS program to find whether the number is divisible by 2 or 3.

let int = prompt('enter a number:')
if(int % 2 == 0 || int% 3 == 0){
    console.log('given number is either divisible by 2 or 3');
}else {
    console.log('given number is not divisible by 2 or 3');
}

// question no. 5 : Print "you can Drive" or "you cannot Drive" based on age being greater than 18 using ternary operator
let a = 15;
console.log('you', a > 18 ? "can Drive": "cannot Drive");

