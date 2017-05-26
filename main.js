require("babel-polyfill");

var range = require("./src/range");

let range10 = range(10);

var obj = {};
obj[Symbol.iterator] = function() {
  console.log("iterator is called");
};
// function* gen2() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// console.log([...gen2()]);
// console.log([...obj]);
console.log([...range10]);
