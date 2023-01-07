// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
const fun2 = () => 100;
const fun = (a, b = fun2()) => a + b;
console.log(fun(1));
