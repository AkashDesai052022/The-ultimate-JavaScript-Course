// practice set of chapter 3

// question no. 1 : Write a program to print the marks of a student in an object using for loop
let marks = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};
for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("the marks of students " + Object.keys(marks)[i] + " is : " + marks[Object.keys(marks)[i]]);
}

// question no. 2 : Write a program of Q1 using for in loop
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 7,
}
 for (const key in obj) {
    console.log(key, ' : ',obj[key]);
 }

// question no. 3 : Write a program to print "try again" until user enters a correct number

// let correctNum = 4;
// let num ;
// num = parseInt(num);
// if (num == correctNum) {
//   console.log("congratulations. you got right number");
// } else {
//   console.log("try again.");
// }

let cn = 5;
let i 
while(i != cn){
    alert("try again !!!");
 i = prompt("enter a correct number")
}
alert("congratulations. you got right number");


// question no. 4 : write a program to find mean of 5  numbers

function mean(p, q, r, s, t) {
  return (p + q + r + s + t) / 5;
}
console.log(mean(4, 6, 7, 7, 8));
