// Lexical scope is the ability for a function scope to access variables from the parent scope.
// we can say here function is access the outside variable then called lexical scope
// we cant access variable from inner to outer.

// function test() {
//   let t = 1;
//   function test2() {
//     console.log(t);
//   }
//   test2();
// }
// test();
// ----------------------------------------------------------------------------

// Closure

// we can say the funtion along with the lexical scope forms  closure
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// counter dilemma
// function test() {
//   let count = 0;
//   function add() {
//     count += 1;
//     return count;
//   }
//   return add;
// }
// const output = test();
// console.log(output());
// console.log(output());w
