// DOM manipulation

// selecting elements with id

console.log(document.getElementById("heading-1"));

// selecting elements using class - returns a HTML collection which is similar to array

console.log(document.getElementsByClassName("heading"));

// selecting elements using tag

console.dir(document.getElementsByTagName("p"));

// selecting using Query selector - it returns the node list
// elements using class, id or tag name can be accessed using querySelector.

let firstEl = document.querySelector("p");  //returns the first element matching the passed param
console.dir(firstEl);

let allEl = document.querySelectorAll("p");  //returns all the elements matching the passed param
console.dir(allEl);

let firstClassEl = document.querySelector(".heading");
console.dir(firstClassEl);

let allClassEl = document.querySelectorAll(".heading");
console.dir(allClassEl);