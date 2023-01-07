// --------------Arrow function expressions----------------
// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.

const student = {
  marks: 65,
  showMarks() {
    setTimeout(function () {
      console.log("settimeout: ", this);
    });
    console.log("normal ", this);
  },
};

student.showMarks();
