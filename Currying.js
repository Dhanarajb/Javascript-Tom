// Currying: is the transformation multiple argument to single argument sequences
// why curryng: To avoid the passing variable again and again

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(2)(4)(5)());
