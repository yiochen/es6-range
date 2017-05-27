# range

An implementation of python's range function in ES6.

> **NOTE** This package uses some es6 feature, such as Symbol and generator. Make sure your environment support ES6.

### Usage

```JavaScript

let range = require('es6-range');
console.log([...range[3]]);         // [0, 1, 2]
console.log([...range[1, 3]]);      // [1, 2]
console.log([...range[3, 1, -1]]);  // [3, 2]

for (let i of range(10)) {
    console.log(i);
}
```

