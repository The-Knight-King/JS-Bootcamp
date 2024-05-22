// Q1. Print all the even no. 0 to 100. 

// console.log("Printing all the even nos. till 100")

// for (let i=0;i<=100;i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// };

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

let gameNum = 10;

let userNum = prompt("Guess a number between 0 and 10:");

while(userNum != gameNum) {
    userNum = prompt("You guessed the wrong number! Guess again:");
}

alert("Congrats! you guessed it right!!")