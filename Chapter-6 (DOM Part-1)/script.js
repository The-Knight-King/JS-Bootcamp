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

// DOM - Properties
// tagName

console.log("printing the first para:",firstEl);
console.log("Printing the `tagName` of the first element:",firstEl.tagName);

// innerText and innerHTML methods - they can be used to modify the text and HTML content of the page in the run time as well.

let div = document.querySelector("div");
console.dir(div);
console.log("innerText method:",div.innerText);
console.log("innerHTML method:",div.innerHTML);

let heading = document.querySelector("h1");
console.log("updating heading from JS:",heading);

heading.innerText = "New heading";  //changing the heading text from here
heading.innerHTML = "<i> New Heading </i>"  //Changing the HTML for this heading from here

// textContent method - used to show text for the elements who have hidden visibility.

let hidden = document.querySelector(".hidden");
console.log("Showing the hidden heading:",hidden.textContent);