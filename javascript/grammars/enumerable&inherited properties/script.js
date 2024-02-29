const proto = Object.defineProperties(
  {},
  {
    pe: { value: 1, enumerable: true },
    pne: { value: 2, enumerable: false },
  }
);

const obj = Object.create(proto);
Object.defineProperties(obj, {
  oe: { value: 3, enumerable: true },
  one: { value: 4, enumerable: false },
});

// Object.keys()
console.group("Object.keys(): ");
console.log(Object.keys(obj));
console.groupEnd();
// for...in
console.group("for...in: ");
for (const key in obj) {
  console.log("key: ", key);
}
console.groupEnd();
// Object.getOwnPropertyNames()
console.group("Object.getOwnPropertyNames(): ");
console.log(Object.getOwnPropertyNames(obj));
console.groupEnd();
// in operator
console.group("in : ");
console.log("pe" in obj);
console.log("pne" in obj);
console.log("oe" in obj);
console.log("one" in obj);
console.groupEnd();
