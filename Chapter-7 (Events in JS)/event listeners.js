// Event listeners - multiple event listeners can be added to the same node.

let btn1 = document.getElementById("btn-1");

btn1.addEventListener("click", () => {
    console.log("Added click event - Listener-1");
});

btn1.addEventListener("click", () => {
    console.log("You clicked on button-1 - Listener-2");
});

const listener3 = () => {
    console.log("Added hover event - Listener-3");
};  //we stored this callback func in a variable expliciitly so that we can refer to the exact same function in the removeEventListener.

btn1.addEventListener("mouseover", listener3);

btn1.addEventListener("mouseover", () => {
    console.log("You hovered over button-1 - Listener-4");
});

// we can also remove the event listeners in the same way. here let's we want to remove the listener-3 so we will have to store that event in a variable as the function declaration cannot be passed directly in the removeEventListener.

btn1.removeEventListener("mouseover",listener3);