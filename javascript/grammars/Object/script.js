//Object.entries()
const obj1 = {
  key1: "value1",
  key2: "value2",
  key3: [
    {
      key4: "value4",
      key5: "value5",
    },
  ],
};

console.log(Object.entries(obj1));
//expected result:
/**
 * [
 * [key1, value1],
 * [key2, value2],
 * [key3, {{key4 : value4, key5 : value5}}],
 * ]
 */

Object.entries(obj1).map((entry) => {
  const key = entry[0];
  const value = entry[1];
});
