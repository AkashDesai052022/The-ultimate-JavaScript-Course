console.log("this is video of var, let and const");

var a = 45;
let b = 'harry' // here b variable is in global scope
var c = null
var d = undefined

{
    let b = 'this' // here b is in black scope
    console.log(b);  // here we cannot redeclare a same variable with let but we can update a variable with only type b = "hello" it will considered as (create a varible b but if it is already declared then update it's value)
}
console.log(b);


const author = "akash"  // here we cannot redeclared and update
 author = 0   // error :  Assignment to constant variable.