
// practice set : chapter 7 

// question no. 1 : Create a navbar and change the color of its first element to red

document.getElementsByTagName('ul')[0].firstElementChild.style.color = 'red'

// question no. 2 : Create a table without tbody Now use "vuew page source" button to check whether it has a tbody or not

// after click on view page source (it gives raw data as it is) but in Element section tbody is automatically added to table (by browser)

// question no. 3 : create an element with 3 children. Now change the color of first and last element to green

document.getElementsByTagName('ul')[0].firstElementChild.style.color = 'green'
document.getElementsByTagName('ul')[0].lastElementChild.style.color = 'green'


// question no. 4 : write a javaScript code to change background of all <li> tags to cyan

Array.from(document.getElementsByTagName('ul')).forEach((element)=>{
    element.style.background = 'red'
})


// question no. 5 : Which of the following is used to look for the farthest ancestor that matches a given css selector
// a : mathces
// b: closest
// c: contains 
// d: none of these  // this is correct answer 
