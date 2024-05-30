// learning fetch API - The JavaScript Fetch API and the REST API are different from one another. Fetch is a browser utiltity that you would use to call a REST API. Some of the differences include: Fetch is a function which takes a REST API url in its call.

const URL = "https://cat-fact.herokuapp.com/facts";
let factBtn = document.querySelector("#fact-btn");
let factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("Getting data .....");
    let response = await fetch(URL);
    console.log(response);  //JSON format
    let data = await response.json();    //using json method to parse the JSON object data to JS object so that it can be used directly by us and we can read it or add it to otu HTML page.
    factPara.innerText = data[4].text;
};

factBtn.addEventListener("click", getFacts);

// Building the above using promise chaining

// function getData () {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[4].text;
//     });
// }