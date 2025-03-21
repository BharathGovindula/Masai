// You are given a JavaScript snippet that logs messages in a specific order. However, there is an error in the output order because of asynchronous code. Debug the code so it matches the following order of execution:

// console.log("Begin"); setTimeout(() => { console.log("Timeout Task"); }, 0); Promise.resolve().then(() => { console.log("Promise Task"); }); console.log("End");

// The correct order should be:

//     Begin
//     End
//     Promise Task
//     Timeout Task

// Correct any issues in the code and explain why the output order follows this specific sequence

console.log("Begin"); //this statement is synchronous so its log first
setTimeout(() => {
  console.log("Timeout Task");//it excuted asynchronously after 0ms delay
}, 0);
Promise.resolve().then(() => {
  console.log("Promise Task");//higher priority than setTimeoutand setInterval
});
console.log("End");//this statement is synchronous