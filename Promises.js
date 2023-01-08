// promises is use to handle the async in javascript
// A promise is an object that return value which you hope t receive in th future
// suppose if we call the api

// why promise?
// synchronus and single threaded. it means javascript never wait for the code. js direct execute next code

// Promising code

// consuming code

// let data = 1;
// console.log(data);
// let adata = 2;
// setTimeout(() => {
//   console.log(adata);
// }, 2000);
// data = 3;
// console.log(data);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("executed");
//   });
// });
// promise
//   .finally((i) => {
//     console.log("finally", i);
//   })
//   .then((yes) => {
//     console.log(yes);
//   });

// let data = fetch("https://dummyjson.com/products");
// data
//   .then((res) => {
//     return res.json();
//   })
//   .then((re) => console.log(re));

// promise chaining
// let data = new Promise((resolve, reject) => {
//   resolve(10);
// });

// data
//   .then((item) => {
//     console.log("1", item);
//     return item * 10;
//   })
//   .then((item) => {
//     console.log("2", item);
//   });

// Promise all
// let p1 = () => Promise.resolve("dhanu");
// let p2 = () => Promise.resolve("dhanu");
// let p3 = () => Promise.resolve("dhanu");

// Promise.all([p1(), p2(), p3()]).then((yes) => {
//   console.log(yes);
// });

// Promise.race
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("first");
//   }, 3000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("second");
//   }, 1000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("third");
//   }, 2000);
// });

// Promise.race([p1, p2, p3]).then((yes) => console.log(yes));
