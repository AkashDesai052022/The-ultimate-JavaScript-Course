// Map, filter, reduce 

let arr = [12, 13, 14, 15]
// console.log(arr);
 let a = arr.map((value)=>{
    console.log(value);
    return value + 1;
})
console.log(a);

// map method is return new array and forEach use for change in existing array

// filter method
 let arr2= [12,34, 54,5, 6,67 ,7 ]
 let a2 = arr2.filter((value)=>{
    return (value<10);
 })
 console.log(a2);

 // reduce method

 let arr3 = [1,2,3,4,5,6]
//  let newarr3 = arr3.reduce((a , b)=>{
//     return a + b;
//  })
let func = (a, b)=>{
return a + b
}
let newarr3 = arr3.reduce(func)  // only name of function gives reference and function name ends with paranthesis gives command for calling a function
 console.log(newarr3);