// Strings in JS

abc = "Apna college"
console.log(abc)

// Strings in JS have some inbuilt properties and functions, let's see them.

str = "Javascript is fun"
console.log(str)
console.log("Length of str is:",str.length)    //length function

// string indices

console.log(str[0],str[5],str[8])

// Template Literals in JS
// we can print strings using `` in the form of template literals.

let obj = {
    name: "pen",
    price: 20,
};

console.log(`The price of ${obj.name} is $${obj.price}.`)   //printing data using this format is known as `String interpolation` in JS and is used commonly.

// escape characters inside strings in JS like \n, \t

console.log("Hi there!\nI hope you are doing well.");
let string = "Happy\tWeekend";  //str length is 13 here instead of 14 bcoz \t is treated only as a single character.
console.log("String:",string);
console.log(`Lenth of the above string is: ${string.length}`);