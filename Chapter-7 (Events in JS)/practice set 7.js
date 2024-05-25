// PQ. Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

let toggleBtn = document.getElementById("toggle");
let currMode  = "light";    //this variable is acting like a switch

toggleBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        let body = document.querySelector("body");
        body.style.backgroundColor = "#212121";
        toggleBtn.innerText = "Click for light mode"
        toggleBtn.style.backgroundColor = "#f0f8ff";
        toggleBtn.style.color = "#212121";
    } else {
        currMode = "light";
        let body = document.querySelector("body");
        body.style.backgroundColor = "#f0f8ff";
        toggleBtn.innerText = "Click for dark mode"
        toggleBtn.style.backgroundColor = "#212121";
        toggleBtn.style.color = "#f0f8ff";
    }
})