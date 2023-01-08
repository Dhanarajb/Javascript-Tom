// Synchronous: here our code will run line by line.
console.log("1");
console.log("2");
// Asynchronus: here code will never wait.
console.log("1");
setTimeout(() => {
  console.log("2");
});
console.log("3");
