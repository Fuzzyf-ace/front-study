function echo(input) {
  return input;
}
var output = echo("123"); //the input and the output have consistent types
function swap(tuple) {
  return [tuple[1], tuple[0]];
}
var swapped = swap([123, "123"]);
function getLength(input) {
  return input.length;
}
console.log(getLength("123"));
