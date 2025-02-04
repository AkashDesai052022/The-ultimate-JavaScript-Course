// alert("hello");

// let a = setTimeout(() => {
//     alert('Hey I am inside of settimeout')
// }, 2000);
// console.log(a);
// clearTimeout(a)  // output : 1 ( this is timer ID)

// const sum = (a, b) => {
//   console.log("Yes, I am running", a + b);
// };
// setTimeout(sum, 2000, 4, 5);

const multi = (a, b) => {
  console.log(a * b);
};
let b = setInterval(multi, 500, 5, 7);
clearInterval(b)

