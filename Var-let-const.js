{
  /* <h1>
  ES6 introduced two new kinds of variables in Javascript, const and let. They
  are block scoped variables, meaning they are scope inside {}, where var is
  hoisted to the global or functional scope.
</h1>; */
}
// -----------Snippet 1 - for loop----------
// var
// console.log(i); // undefined
// for (var i = 0; i < 3; i++) {
//   console.log(i); // 0; 1; 2
// }
// console.log(i); // 3

//-----------------

// let
// console.log(i); // ReferenceError: i is not defined
// for (let i = 0; i < 3; i++) {
//   console.log(i); // 0; 1; 2
// }
// console.log(i); // ReferenceError: i is not defined

//   //-----------------

//   // const
//   // console.log(i); // ReferenceError: i is not defined
// for (const i = 0; i < 3; i++) {
//   console.log(i); // 0; ReferenceError: i is not defined
// }
// console.log(i);
{
  /* <h1>
  This first code snippet shows us that const and let are scoped at a block
  level, where var is scoped and hoisted, here in the global scope. We can see
  as well that the value of const cannot change in our for loop.
</h1>; */
}
// -----------Snippet 2 - Reassign values---------------
// // var
// var test = 1;
// console.log(test); // 1
// test = 2;
// console.log(test); // 2

// //-----------------

// // let
// let test = 1;
// console.log(test); // 1
// test = 2;
// console.log(test); // 2

// //-----------------

// // const
// const test = 1;
// console.log(test); // 1
// test = 2;
// console.log(test); // TypeError: invalid assignment to const `test'
// This example shows us that the value of const can’t be reassigned.
// --------------Snippet 3 - Redeclare variable-------------
// var
// var test = 1;
// console.log(test); // 1
// var test = 2;
// console.log(test); // 2

// //-----------------

// // let
// let test = 1;
// console.log(test); // SyntaxError: redeclaration of let test
// let test = 2;
// console.log(test);

// //-----------------

// // const
// const test = 1;
// console.log(test); // SyntaxError: redeclaration of const test
// const test = 2;
// console.log(test);
// // Both let and const can’t be redeclare
// -------------Snippet 4 - Scope------------------
// var
// var test = 1;
// function testFunction() {
//   var test = 2;
//   console.log(test); // 2
// }
// console.log(test); // 1

// //-----------------

// // let
// let test = 1;
// if (test > 0) {
//   let test = 2;
//   console.log(test); // 2
// }
// console.log(test); // 1

// //-----------------

// // const
// const test = 1;
// if (test > 0) {
//   const test = 2;
//   console.log(test); // 2
// }
// console.log(test); // 1
// The above examples, show us that using let and const can reuse in another scope.
// ---------------Snippet 5 - Object------------------
// var
// var obj = {
//   test1: 1,
//   test2: 2,
// };
// // obj = {test: 0};
// // console.log(obj); // { test: 0 }
// obj.test1 = 10;
// console.log(obj); // { test1: 10, test2: 2 }

//-----------------

// let
// let obj = {
//   test1: 1,
//   test2: 2,
// };
// // obj = {test: 0};
// // console.log(obj); // { test: 0 }
// obj.test1 = 10;
// console.log(obj); // { test1: 10, test2: 2 }

// //-----------------

// // const
// const obj = {
//   test1: 1,
//   test2: 2,
// };
// // obj = {test: 0};
// // console.log(obj); // invalid assignment to const `obj'
// obj.test1 = 10;
// console.log(obj); // { test1: 10, test2: 2 }
// This last example shows us that with const we can mutate properties in our variable.

// ----------hoisting--------
// The process of shifting the declaration of variables, functions,
// and classes to the top of their scope before the execution of code is called hoisting
// or
// Hoisting is the default behaviour of JavaScript where all the variables
// and functions declarations are moved to the top.

// ------------Hoisting in Functions----------
// Hoisting in functions works the same way with the only notable exception that
// function declarations are hoisted but not function expressions. For example --

// sayHello(); // logs Hello

// // Function declaration
// function sayHello() {
//   console.log("Hello");
// }
// Function declarations are hoisted to the top of the enclosing function or global scope.
// We can use the function before we declared it.

// sayHello(); // Uncaught TypeError: sayHello is not a function

// // Function expression
// var sayHello = function () {
//   console.log("Hello");
// };
// Function expressions are not hoisted, unlike function declarations.
// We can't use function expressions before we create them.

// ---------- Temperal dead zone ----------

// for the let and const variable are hoisted but not accesable till initialize
// console.log(a);
// let a = 20;
// console.log(a);
// The TDZ is a good thing because it helps to highlight bugs—accessing a value before it has been declared is rarely intentional.
