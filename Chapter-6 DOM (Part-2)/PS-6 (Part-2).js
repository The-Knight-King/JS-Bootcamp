/* PQ1. Create a new button element. Give it the text "Click me", background colour of red and text colour of white.
Insert the button as the first element inside the body tag. */

let newButton = document.createElement("Button");   //creating button
newButton.innerText = "Click me";   // giving it text
newButton.style.backgroundColor = "Red";    //styling the button
newButton.style.color = "white";

let body = document.querySelector("body");  //accessing the body element
body.prepend(newButton);    //adding the button at the start of the body

/* PQ2. Create a <p> tag in HTML, give it a class and some styling. Now create a new class in CSS and try to append this class to the <p> element.

Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
*/

let para = document.querySelector(".pq-2");  //Accessing the p element
// para.setAttribute("class","newClass");  //setting the newClass as the class for p element

// here when we try to change the class of the p element using the setAttribute method, it completely overrides the previous class and just applies the new class to the element. But we want the p element to have both the classes, i.e. the original class and the `newClass`, so we will use `classList` to overcome this.

para.classList.add("newClass"); //now this is adding the newClass to the p element while keeping the original class and also applying the styling of both the classes to the element.