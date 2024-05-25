// Event handling in JS

let btn1 = document.getElementById("btn-1");
btn1.onclick = () => {
    console.log("Button-1 was clicked!");
    // we can do any other calculation/operation that we want.
    // let a = 25;
    // a++;
    // console.log(a);
};

let btn2 = document.getElementById("btn-2");
btn2.ondblclick = () => {
    console.log("Button-2 was double clicked!!");
};

let box1 = document.getElementById("box-1");
box1.onmouseover = () => {
    console.log("You are in box-1");
    box1.innerText = "You are in box-1";
};

// Event objects in JS

btn1.onclick = (event) => {
    console.log("Button-1 was clicked!");
    console.log("Printing the event object:",event);
    console.log("event.type:",event.type);
    console.log("event.target:",event.target);
};