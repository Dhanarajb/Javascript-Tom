// Shallow copy: if two properties of object reference is same

let dev1 = { name: "Tom" };
let dev2 = dev1;
dev2.name = "sweet";

console.log(dev1);
console.log(dev2);

// Deep coly:If two properties object references is different

let dev1 = { name: "Tom" };
let dev2 = Object.assign({}, dev1);
let dev2 = { ...dev1 };
dev2.name = "sweet";

console.log(dev1);
console.log(dev2);

let dev1 = { name: "Tom", skills: { primary: "full", secondary: "ux" } };
let dev2 = JSON.parse(JSON.stringify(dev1));
dev2.name = "sweet";
dev2.skills.primary = "front end";

console.log(dev1);
console.log(dev2);

// ---------------------lodash-----------------
const _ = require("lodash");

let dev1 = {
  name: "Tom",
  skills: { primary: "full", secondary: "ux" },
  calculate: function (param) {
    return 30;
  },
  join: new Date(),
};
let dev2 = _.cloneDeep(dev1);
dev2.name = "sweet";
dev2.skills.primary = "front end";

console.log(dev1);
console.log(dev2);
//--------------------------------------------------
// Original object
const originalObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Example City',
    country: 'Example Country'
  },
  family: ['Alice', 'Bob'],
};

// Shallow copy using the spread operator
const shallowCopy = { ...originalObject };

// Shallow copy using Object.assign()
const shallowCopy2 = Object.assign({}, originalObject);

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modifying the copied objects
shallowCopy.name = 'Jane';
shallowCopy2.age = 35;
shallowCopy2.family = 'Dhanu';
shallowCopy2.address.country = 'india';
deepCopy.address.city = 'New City';

// Output
console.log(originalObject);
console.log(shallowCopy);
console.log(shallowCopy2);
console.log(shallowCopy2);
console.log(deepCopy);

