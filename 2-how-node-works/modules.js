// console.log(arguments);
// console.log(require("module").wrapper);
const C = require("./test-module1");
const calc1 = new C();
console.log(calc1.add(1, 6));
//exports
// const c = require("./test-module2");
// console.log(c.add(2, 5));
const { add, mult } = require("./test-module2");
console.log(add(2, 5));
console.log(mult(2, 5));
