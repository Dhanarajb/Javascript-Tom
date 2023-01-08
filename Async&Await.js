// Async and await is make promise easier to write
// async makes a function return a Promise
// await makes a function wait for the Promise

// const fun = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("yes");
//     });
//   });
//   let x = await promise;
//   console.log(x);
// };
// fun();

// const fun = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   data = await data.json();
//   console.log(data);
// };
// fun();
