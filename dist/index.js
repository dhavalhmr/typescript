"use strict";
let age = 10;
if (age < 20) age += 50;
let obj = [
  {
    _id: "abc1234##@!",
    name: "abcbhai",
  },
  {
    _id: "bcz1234##@!",
    name: "abcbhai",
  },
  {
    _id: "qwerty1234##@!",
    name: "abcbhai",
  },
];
const array = obj.filter((e) => {
  let arr = [];
  arr += e._id;
  console.log("arr: ", arr);
  return arr;
});
console.log("array: ", array);
//# sourceMappingURL=index.js.map
