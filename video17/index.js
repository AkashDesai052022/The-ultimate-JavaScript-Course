// typeof operator gives object on array

// methods of arrays
let arr = [1, 3, 5, 6, 7, 78];
let a = arr.toString()  // converting to string
console.log(a, typeof a);

let c = arr.join('*')
let d = arr.join(' and ')
console.log(d, typeof c);

let r = arr.pop()  // pop method return popped element and remove it from existing array and it leads to change in original array
console.log(arr ,r);

let p = arr.push(6005)  // push method add a new value to end of the array
console.log(arr , p);  // p returns a array new array length

let s = arr.shift()  // remove the first value of an array
console.log(arr,s);

let b = arr.unshift(54)  // adds new value to begining to an array
console.log(arr, b);

let e = delete arr[0]
console.log(e);