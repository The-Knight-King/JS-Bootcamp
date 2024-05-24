// DOM manipulation - Attributes

// getAttribute 

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// setAttribute
let para = document.querySelector("p");

para.setAttribute("class","paragraph"); //changing class of p to `paragraph`
console.log(para);

// node.style attribute

let div = document.querySelector("div");
div.style.backgroundColor = "Cyan";
div.style.color = "black";