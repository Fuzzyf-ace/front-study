// import { count, increment } from "./data.js";
const { count, increment } = require("./data");

const tag = "subIndex";
console.log(tag, count); // 1
increment();
increment();
console.log(tag, count); // 3
