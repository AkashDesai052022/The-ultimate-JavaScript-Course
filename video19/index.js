let num = [1, 2, 3, 4, 5, 6, 7, 8]

// for(let i = 0; i<num.length; i++){
//     console.log(num[i]);
// }

// forEach loop
num.forEach(element => {
    console.log(element*element);  // here we get squares of numbers in num array
}); 

// array.from  : useful for converintg HTML collection to an array
// also convert to an array from any other object
let arr = Array.from('akash')
console.log(arr);  // here a array is formed  output : [ 'a', 'k', 'a', 's', 'h' ]

// for of loop

for (const i of num) {
    console.log(i);
}

// for in loop

for (const item in num) {
    console.log(item);  // this loop is used in obejct that's why it gives index value if you want values then ===> item[i]
}


