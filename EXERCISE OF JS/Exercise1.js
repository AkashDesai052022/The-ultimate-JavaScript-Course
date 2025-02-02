// Exercise 1 - Guess the number

// Write a JS program to generate a random number and store it in a varialbe.
// The program then takes an input from the user to tell them whether the guess was correct, grater or lesser than the original number
// 100 - (no. of guesses) is hte score of the user
// the program is expected to terminate once the number is gussed.
// Number should be between 1 - 100

let number = Math.floor(1 + Math.random() * 99);
let chances = 0;
let guess;
// console.log(guessnumber);
++chances;
guess = prompt("enter a number between 1 to 100.");

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("Entered Number is greater");
    guess = prompt("enter again!!!");
    guess = Number.parseInt(guess);
    ++chances;
    continue;
  } else if (guess < number) {
    console.log("Entered Number is smaller.");
    guess = prompt("enter again!!!");
    guess = Number.parseInt(guess);
    ++chances;
    continue;
  }
} while (guess != number);
let score = 100 - chances;
console.log(
  "congratulation, you guess is right." +
    " computer guess is " +
    number +
    "and your guess is " +
    guess +" so your final score is " + score
);
