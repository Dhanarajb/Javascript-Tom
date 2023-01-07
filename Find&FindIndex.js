// The method find() is used to return the first array element that passes a certain test function.
// The method findIndex() is used to return the first array index that passes a certain test function.

// let num = [20, 44, 15, 18, 25, 50];
// let result = num.find((nu) => nu > 25);
// let resu = num.find((nu) => nu > 18);
// console.log(result);
// console.log(resu);

let obj = [
  { id: 20, name: "a" },
  { id: 43, name: "b" },
  { id: 12, name: "c" },
  { id: 65, name: "d" },
  { id: 4, name: "e" },
];
let result = obj.find((num) => num.id > 40);
let res = obj.find((num) => num.name > "b");
console.log(result);
console.log(res);
