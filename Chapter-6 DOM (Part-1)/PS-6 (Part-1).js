// ******* Part-1 *******
// PQ1. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

let heading = document.querySelector("#pq-1");
console.log("Original Heading:",heading.innerText);

heading.innerText = heading.innerText + " from Apna College students";
console.log("Heading after appending:",heading.innerText);

// PQ2. Create 10 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");   //divs is a node list here, works like array
let idx = 1;

// adding unique value to all the divs
for (let div of divs) {
    div.innerText = `Unique Value ${idx}`;  //changing the original div text to this text
    idx++;
};

// ******* Part-2 *******