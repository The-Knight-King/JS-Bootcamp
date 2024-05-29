// let's see an example of asynchronous programming - here all the statements will execute and don't wait for the setTimeOut func to execute, they will execute first and the timeout func will start executing in parallel.

// console.log("Statement1");
// console.log("Statement2");

// // Using setTimeOut function to make the program asynch
// setTimeout(() => {
//     console.log("Executed after 4 seconds!")
// }, 4000)    //giving it a timeout of 4 sec, means it will execute after 4 seconds.

// console.log("Statement3");
// console.log("Statement4");

// Callback Hell

console.log("Seeing callback hell")

function getData (dataId, getNextData) {
    // delay of 2sec
    setTimeout(() => {
        console.log("Data",dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("Getting data 2.....");
    getData(2, () => {
        console.log("Getting data 3.....");
        getData(3, () => {
            console.log("Getting data 4.....");
            getData(4)
        });
    });
});

// this type of nesting of callbacks can be called as callback hell as it is not easy to understand and is not a good coding practice, so we should avoid this.