// promises in JS

// creating and returing a promise

// const getPromise = () => {
//     return new Promise ((resolve,reject) => {
//         console.log("I am a promise");
//         resolve("successfuly");
//         reject("some unexpected error…");
//     });
// };


// // accessing the promise returing the value

// let promise = getPromise();

// promise.then((res) => {
//     console.log("Promise fulfilled!",res);
// });

// promise.catch((err) => {
//     console.log("Promise rejected due to",err);
// });

// Creating asynch functions that returns a promise

function asynch1 () {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            console.log("Got data1");
            resolve("Success!");
            // reject("Some error occured…")
        }, 3000);   //returns data after 3 seconds
    });
};

function asynch2 () {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            console.log("Got data2");
            resolve("Success!!");
            // reject("Some error occured…")
        }, 3000);   //this also returns data after 3 seconds
    });
};

// accessing the promises - chain of .then is called the promise chain

console.log("Fetching data1.....");
asynch1().then((res) => {
    console.log(res);
    console.log("Fetching data2.....");
    // chaining promise 2 inside promise 1
    asynch2().then((res) => {
        console.log(res);
    });
});

// asynch1().catch((err) => {
//     console.log(err);
// });

// here both the promises are getting fulfilled at the same time but we want promise2 fetch the data only after the promise 1 is fulfilled and for this we use promise chaining, i.e. we use `then` method inside another `then`.

// promise-2
// console.log("Fetching data2.....");
// let p2 = asynch2();

// p2.then((res) => {
//     console.log(res);
// });

// p2.catch((err) => {
//     console.log(err);
// });