// question no. 1 : Create a varialbe of type string and try to add a number to it

let name = "akash" + 1 ;
console.log(name);

// question no. 2 : Use typeof operator to find the datatype of the string of last question
console.log(typeof name);

// question no. 3 : Create a const object in JavaScript can you change it to hold a number later?
const obj = {
    'age': 'twenty-four'
}
// obj = 24;  // ans : no, TypeError: Assignment to constant variable.
console.log(obj);
// here obj is only reference of object that's why we cannot reassing and redeclared it but in obj we can change keys and values of obj 

// question no. 4 : try to add a new key to the const object in problem 3 were you able to do it?

obj.name = "akash"
console.log(obj);

// question no. 5 : write a JS program to create a word-meaning dictonary of 5 words
const dictonary = {
    "Serendipity":" The occurrence of events by chance in a happy or beneficial way",
    "Ephemeral": "Lasting for a very short time.",
    "Ambiguous":" Open to more than one interpretation; not having one obvious meaning.",
    "Melancholy": "A feeling of deep sadness, often without a clear cause.",
    "Eloquent": "Fluent or persuasive in speaking or writing."
}
console.log(dictonary['Serendipity']);
console.log(dictonary.Serendipity);