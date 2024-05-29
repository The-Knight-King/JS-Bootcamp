// let's see an example of asynchronous programming - here all the statements will execute and don't wait for the setTimeOut func to execute, they will execute first and the timeout func will start executing in parallel.

console.log("Statement1");
console.log("Statement2");

// Using setTimeOut function to make the program asynch
setTimeout(() => {
    console.log("Executed after 4 seconds!")
}, 4000)    //giving it a timeout of 4 sec, means it will execute after 4 seconds.

console.log("Statement3");
console.log("Statement4");