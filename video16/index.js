let marks = [13,45, 66, 65, false, "not present"]
console.log(marks);
console.log(marks.length);
// for accessing the values of array
console.log(marks[0]) // output : 13
console.log(marks[1]) // output : 45
console.log(marks[2]) // output : 66
console.log(marks[3]) // output : 65
console.log(marks[4]) // output : false
console.log(marks[5]) // output : not present
marks[6] = 95; // adding new value to undefined 
console.log(marks[6]);  // undefined
console.log("the length of given array is ", marks.length);

marks[6] = 60;
console.log(marks);

// arrys are mutable arrys can be change 
// but strings are  immutable they cannot be change


// quick quiz : accessing and printing all values of array using loop

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    console.log(element);
}