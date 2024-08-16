import * as school from "./school.js";

import { name, address } from "./school.js"; // named import
import { nameE as nameB, addresE as addressB } from "./school.js"; // alias import
import defaultNumber from "./school.js"; // default import

console.log(
  `{ name: ${name}, address: ${address}; nameB: ${nameB}, addressB: ${addressB}; defaultNumber: ${defaultNumber} }`
);

console.log(school);
