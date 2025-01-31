// chapter 4 practice set 

// question no. 1 : What will the following print in JS ?
console.log("har\"".length)  // output : 4 

// question no. 2 : Explore the includes, startwith &  endsWith function of string
let str = "HARRY is good programmer"
console.log(str.startsWith("akash"))  // output : false 
console.log(str.includes("is"));  // output : true
console.log(str.endsWith("programmer"));  // output : true


// question no. 3 : write a program to convert a string to lowercase

console.log(str.toLowerCase());

// question no. 4 : Extract the amount out of this string 'please give Rs 1000'

let ex = "please give Rs 1000";
console.log(ex.indexOf("1000"));
let amount = parseInt(ex.slice(15))
console.log(amount);
console.log(typeof amount);

// question no. 5 : try to change 4th character of the given string were you able to do it?
ex[1] = "give";
console.log(ex);