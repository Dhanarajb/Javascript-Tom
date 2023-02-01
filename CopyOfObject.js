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
