// class is userdifened datatype, here we can define constructor
// Classes are a template for creating objects. They encapsulate data with code to work on that data
class Fruit {
  name = "orrange";
  constructor() {
    console.log("constructor", this.name);
  }
  getFruit() {
    console.log("function");
  }
}
let f1 = new Fruit();
f1.getFruit();
