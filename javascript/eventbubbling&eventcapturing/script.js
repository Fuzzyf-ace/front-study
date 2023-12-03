const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const button = document.querySelector("#button");

/**
 * 1.Event Bubbling
 * Supposed to be the default behavior
 * Output: Button, Inner Div, Outer Div
 */
outer.addEventListener("click", () => {
  console.log("Outer Div");
});
inner.addEventListener("click", () => {
  console.log("Inner Div");
});
button.addEventListener("click", () => {
  console.log("Button");
});

/**
 * 2.Event Capturing
 * Output: Outer Div, Inner Div, Button
 */
// outer.addEventListener(
//   "click",
//   () => {
//     console.log("Outer Div");
//   },
//   true
// );
// inner.addEventListener(
//   "click",
//   () => {
//     console.log("Inner Div");
//   },
//   true
// );
// button.addEventListener(
//   "click",
//   () => {
//     console.log("Button");
//   },
//   true
// );

/**
 * 3.Event Capturing mix with Event Bubbling
 * Output: Outer Div, Button, Inner Div
 */
// outer.addEventListener(
//   "click",
//   () => {
//     console.log("Outer Div");
//   },
//   true
// );
// inner.addEventListener(
//   "click",
//   () => {
//     console.log("Inner Div");
//   },
//   false
// );
// button.addEventListener(
//   "click",
//   () => {
//     console.log("Button");
//   },
//   true
// );

/**
 * 4.Event Capturing mix with Event Bubbling with stopPropagation()
 * Output: Outer Div, Button
 */
// outer.addEventListener(
//   "click",
//   () => {
//     console.log("Outer Div");
//   },
//   true
// );
// inner.addEventListener(
//   "click",
//   () => {
//     console.log("Inner Div");
//   },
//   false
// );
// button.addEventListener(
//   "click",
//   (e) => {
//     console.log("Button");
//     e.stopPropagation();
//   },
//   true
// );
