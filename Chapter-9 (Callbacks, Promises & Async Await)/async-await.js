// seeing async-await functions in JS

// creating a func that returns a promise

function api () { 
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather Data fetched!");
            resolve("Success");
        }, 2000);
    });
};

// using async func and await to access the data from the promise
// here await is stopping the execution of the 2nd call of the api() and is only executing after the 1st call is completed.

// async function getWeatherData () {
//     await api();    //1st call
//     console.log("Success!");
//     await api();    //2nd call
//     console.log("Success again!")
// };

// getWeatherData();

// creating another function

function getData (dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("Data",dataId);
            resolve("Success!")
        }, 2000);
    });
};

// async-await 

(async function getAllData() {
    console.log("Getting data1....");
    await getData(1);
    console.log("Getting data2....");
    await getData(2);
    console.log("Getting data3....");
    await getData(3);
})();   // converting the function into IIFE

// getAllData(); // Function call not needed now