//  Destructuring: unpack the array store in variable we can say its destructuring

//Array
// let fruits = ["appple", "mango", "kiwi", "orange"];
// // let [a, b, c, d] = fruits;
// let [...a] = fruits;
// console.log(a);

//Object
let user = { name: "Dhanu", email: "Dhanu@gmail.com", phone: 9590891302 };
let { phone, ...name } = user;
console.log(name);
