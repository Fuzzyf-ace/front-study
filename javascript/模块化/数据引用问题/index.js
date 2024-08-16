const { count, increment } = require("./data");

console.log(count); // 1
increment();
increment();
console.log(count); // 1

require("./subIndex");

// import { count, increment } from "./data.js";
// import "./subIndex.js";
// console.log(count); // 1
// increment();
// increment();
// console.log(count); // 3
