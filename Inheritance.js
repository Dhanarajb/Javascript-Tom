//  inheritance define a class that takes all the functionality from a parent class and allows you to add more.
// Using class inheritance, a class can inherit all the methods and properties of another class.
// To use class inheritance, you use the extends keyword.
// The super keyword used inside a child class denotes its parent class.

class Category {
  dryFruit() {
    return "almond is dry fruit";
  }
  pomeFruit() {
    return "apple is pome fruit";
  }
}

class Fruit extends Category {
  constructor() {
    super();
    console.log("constructor");
  }
  getFruit() {
    return "you got apple";
  }
}

let f1 = new Fruit();
let c1 = new Category();
console.log(f1.getFruit());
console.log(c1.pomeFruit());
