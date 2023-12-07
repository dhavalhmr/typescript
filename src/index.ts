let age: number = 10;

if (age < 20) age += 50;

type Obj = {
  readonly _id: string;
  name: string;
  firstName?: string;
};

let obj: Obj[] = [
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

const array = obj.map((e) => {
  let arr = [];
  arr.push(e._id);
  return arr;
});
console.log("array: ", array);

// const User = [45, 97, "beughi"];
// type User ={
//     name:
// }
// User.push(true);
