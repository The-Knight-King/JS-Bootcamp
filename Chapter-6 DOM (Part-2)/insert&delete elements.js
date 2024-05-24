// insert elements using DOM

// creating some button elements first
let newBtn1 = document.createElement("Button");
newBtn1.innerText = "First!";
console.log(newBtn1);

let newBtn2 = document.createElement("Button");
newBtn2.innerText = "Second!";
console.log(newBtn2);

let newBtn3 = document.createElement("Button");
newBtn3.innerText = "Third!";
console.log(newBtn3);

let newBtn4 = document.createElement("Button");
newBtn4.innerText = "Fourth!";
console.log(newBtn4);

// now inserting the above button element in the page
let div = document.querySelector("div");    //First access the element in which u want to add the new element 
div.append(newBtn1); //Adding the button inside the div element at the last.
div.prepend(newBtn2);  //Adding the button inside the div at the start.
div.before(newBtn3); //Adding the button outside the div just before the div is starting.

let p = document.querySelector("p");
p.after(newBtn4);  //Adding the button after the <p> element.

// deleting elements using DOM

// first we need to access the element that we want to delete.
let para = document.querySelector("#para-del");
para.remove()