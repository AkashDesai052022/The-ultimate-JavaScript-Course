// chapter 6 : practice set 

// question no. 1 : Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!

// let age = prompt('Enter your age to check you can drive or not.')
// age = Number.parseInt(age)
// alert( (age> 18)? "You can drive": " You cannot drive")


// question no. 2 : In q1 use confirm to ask the user if he wants to see the prompt again
// let age = prompt('Enter your age to check you can drive or not.')
// alert( (age> 18)? "You can drive": " You cannot drive")
// let c = confirm("you want to see prompt again")
// if(c == true){
//     let age = prompt('Enter your age to check you can drive or not.')
// alert( (age> 18)? "You can drive": " You cannot drive")
// }
 

// question no. 3 : In the previous question, use console.error to log the error if hte age enetered is negative

let age = prompt('Enter your age to check you can drive or not.')
alert( (age> 18)? "You can drive": " You cannot drive")
if(age < 0){
    console.error("please enter a valid age.")
}
else{
    let c = confirm("you want to see prompt again")
    if(c == true){
        let age = prompt('Enter your age to check you can drive or not.')
    alert( (age> 18)? "You can drive": " You cannot drive")
    }
}

// question no. 4 : Write a program to change the url to google.com (redirection) if user enters a number greater than 4

let ref = prompt("enter a number")
if(ref > 4){
    location.href= "https://www.google.com"
}


// question no. 5 : change the background of hte page to yellow, red or any other color based on user input through prompt


let color = prompt('Enter a name of color')
// if(c == "red"){
//     document.body.style.backgroundColor = "red"
// }else if(c == "yellow"){
//     document.body.style.backgroundColor = "yellow"
// }else{
//     alert("please enter either red or yellow color")
// }
document.body.style.backgroundColor = color;