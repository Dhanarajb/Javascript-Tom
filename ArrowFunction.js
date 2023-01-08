// --------------Arrow function expressions----------------
// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.
let data = [10, 20, 30, 40, 50];

let newData = data.map((item) => item * 2);
console.log(newData);

const student = {
  marks: 65,
  showMarks() {
    console.log("normal ", this);
  },
  getMarks: () => console.log(this),
};

student.showMarks();
student.getMarks();

// we cant bind this because it will redirect to window objwct
