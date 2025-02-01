// chapter 5 : arrays
// practice set 5

// question no. 1 : Create a array of numbers and take input form the user to add numbers to this array

// let numbers = [1, 2, 3];
// let b = prompt("enter a number")
// let a = numbers.push(b)
// console.log(numbers);

// question no. 2 : keep adding numbers to the array in question no. 1 until 0 is added to the array

// let numbers = [1, 2, 3];
// let a;
// do {
//   a = prompt("enter a number");
//   a = Number.parseInt(a);
//   numbers.push(a);
// } while (a != 0);
// console.log(numbers);
  

// question no. 3 : Filter for numbers divisible by 10 from a given array

let arr = [5, 14, 15, 10, 20, 40, 100, 60]
let arr1 = arr.filter((a)=>{
    return a % 10 == 0
})
// console.log(arr1);

// question no. 4 : Create an array of square of given numbers 

let n = [2, 4, 6, 8, 9, 10]
n.forEach((a)=>{
    // console.log(a * a)  ;
})

// question no. 5 : factorial of first n natural numbers

let p = [1, 2, 3, 4, 5, 6]
let q = p.reduce((a, b)=>{
    return a * b;
})
console.log(q);