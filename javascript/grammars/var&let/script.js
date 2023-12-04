// output: 0 1 2 3 4 5 6 7 8 9
console.log(
  `
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
`
);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// output: 0 1 2 3 4 5 6 7 8 9
console.log(
  `
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
    `
);
for (var i = 0; i < 10; i++) {
  console.log(i);
}

/**
 * this will output 10 ten times
 * because the setTimeout function is executed after the loop is finished
 * and the scope of var i is global
 * so the value of i is 10
 * the following code can be converted to for better understanding:
 * var i = 0;
 * setTimeout(()=>{console.log(i)},0);
 * i++;
 * setTimeout(()=>{console.log(i)},0);
 * i++;
 * setTimeout(()=>{console.log(i)},0);
 * i++;
 * loop until i = 10
 * the setTimeout function is executed after the loop is finished because the setTimeout will be in macrotask queue
 */
console.log(
  `
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
          console.log(i);
        }, 0);
      }
    `
);
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

/**
 * this will output 0 1 2 3 4 5 6 7 8 9
 * the scope of let i is block
 * so the value of i is 0 1 2 3 4 5 6 7 8 9
 * the following code can be converted to for better understanding:
 *
 * setTimeout(()=>{
 *      let i = 0;
 *      console.log(i)
 * },0);
 *
 * setTimeout(()=>{
 *     let i = 1;
 *    console.log(i)
 * },0);
 *
 * setTimeout(()=>{
 *    let i = 2;
 *   console.log(i)
 * },0);
 * ...loop until i = 10
 */

console.log(
  `
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  }
    `
);
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
