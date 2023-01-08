// Spreadoperator is using ...
// we can do:
//         1) send params in function
//         2) Copy Array
//         3) Merge Array

// when we can pass the parameter then we can use spreadoperator

// let fruits = ["apple", "banan", "kiwi"];
// function prinAll(a, b, c) {
//   console.log(a, b, c);
// }
// // prinAll(fruits[0], fruits[1], fruits[2]); its too hectic
// prinAll(...fruits);//spread

// Array merge
let fruits = ["apple", "banan", "kiwi"];
// let fruits2 = ["mango", "fina", "wh"];
// console.log(...fruits, ...fruits2);

// let fruits = ["apple", "banan", "kiwi"];
// let fruits2 = ["mango", ...fruits, "fina", "wh"];
// console.log(fruits2);

let newFruits = [...fruits];
newFruits.push("pinaa");
console.log(newFruits);
console.log(fruits);
