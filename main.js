require("babel-polyfill");

var range = require("./src/range");

console.log([...range(2, 5)]);
console.log([...range(10, 1, -1)]);
console.log([...range(10)]);
