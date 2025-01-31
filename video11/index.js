function onePlusAvg(x, y) {
  return Math.round(1 + (x + y) / 2);
}

let a = 1;
let b = 2;
let c = 3;

const sum = (p, q) => {
  return p + q;
};

console.log("one plus average of a and b", onePlusAvg(a, b));
console.log("one plus average of a and c", onePlusAvg(b, c));
console.log("one plus average of c and b", onePlusAvg(a, c));
console.log(sum(3, 5));


const power = (a, b)=>{
    console.log(`the power of ${a} to ${b} is : `, a ** b);
}
power(10, 2);
