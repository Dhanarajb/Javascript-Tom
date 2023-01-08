// 1) Call invokes the function and allows you to pass in arguments one by one.
var person = { name: "Dhanu", age: 26 };
function say() {
  console.log(this.name + " " + this.age);
}
say.call(person, "Hello");
// 2) Apply invokes the function and allows you to pass in arguments as an array.
var person = { name: "Dhanu", age: 26 };
function say() {
  console.log(this.name + " " + this.age);
}
say.apply(person, ["Hello"]);
// 3) Bind returns a new function, allowing you to pass in a this array and any number of arguments.
var person = { name: "Dhanu", age: 26 };
function say() {
  console.log(this.name + " " + this.age);
}
var yes = say.bind(person);
yes();
