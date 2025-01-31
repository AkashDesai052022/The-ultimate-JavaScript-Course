// // delete in array is not method is an operator

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// delete num[0]
// console.log(num); // here delete operator is not delete value it would be empty
// console.log(num.length);
// let nummore = [11,22,33, 44, 55]
// let morenum = [234, 345, 656, 756,453]
// let newArr = num.concat(nummore, morenum)  // gives a new array not change OG array (num and nummore)
// console.log(newArr);

// sort method

let compare = (a, b) => {
  return a - b;
};

let num = [34, 46, 65, 7, 56, 4, 343, 3];
num.sort(compare);
// num.reverse() // change the original array and reverse the order of array
console.log(num); // sort mehtod change the original array alfabetically

// with compare function we can set a accending and descending order on array

// splice and slice

let num1 = [2, 4, 5, 6, 8, 9, 10];
num1.splice(1, 0, 3)  // after this operation the array changed 
num1.splice(5, 0, 7)
console.log(num1);

let newNum1 = num1.slice(2) // here we give only one argument
let newNum2 = num1.slice(3, 6)  // here we give start and end part of an array to slice out it form an array
console.log(newNum1);
console.log(newNum2);