console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

console.log(document.body.firstChild === document.body.childNodes[0])
console.log(document.body.lastChild === document.body.childNodes[document.childNodes.length - 1])

let arr = Array.from(document.body.childNodes)
console.log(arr);  // this is an array which is converted from nodelist to array