
### Primitive Types
Null
Undefined
Boolean
Number
BigInt
String
Symbol

### Reference Types
Object
Array
Function

### instanceof && typeof

typeof might return the followings: "undefined", "object", "function", "boolean", "number", "bigint", "string", "symbol" [[from mdn]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

instanceof: if the operand on the leftside is a primitive type, we can wrap it with an Object() to convert it to a reference type(an instance).

```javascript
5 instanceof Number; // ERROR
Object(5) instanceof Number; // true

```

as the following table shows, we can use typeof to check primitive types or function(return 'function'), but we can't use it to check other reference types. We can use instanceof to check reference types, but we can't use it to check primitive types.

for number, NaN and Infinity are both numbers, but they are not equal to themselves.

BigInt is a new type in ES2020 (ES11), it is used to represent integers larger than 2^53 - 1. BigInt cannot be created by new. It can be created by BigInt() or by adding n to the end of an integer literal.




//Primitive Types
| Type      |     How to Create      |   Create Result   | Has Constructor? | typeof                                  | instanceof/prototype |
| :-------- | :--------------------: | :---------------: | :--------------: | :-------------------------------------- | :------------------: |
| Null      |      null keyword      |       null        |        NO        | typeof null -> 'object' (ancient bug)   |          NA          |
| Undefined |   undefined keyword    |     undefined     |        No        | typeof undefined -> 'undefined'         |          NA          |
| Boolean   |   true/false keyword   |    true/false     |       Yes        | typeof false -> 'boolean'               |          NA          |
|           |       Boolean()        |    true/false     |                  | typeof Boolean(true) -> 'boolean'       |          NA          |
|           |     new Boolean()      |  Boolean {false}  |                  | typeof new Boolean(false) -> 'object'   |       Boolean        |
| Number    |     new Number(1)      |    Number {1}     |       Yes        | typeof new Number(1) -> 'object'        |        Number        |
|           |           2            |         2         |                  | typeof 2 -> 'number'                    |          NA          |
|           |       Number(3)        |         3         |                  | typeof Number(3) -> 'number'            |          NA          |
|           |          NaN           |        NaN        |                  | typeof NaN -> 'number'                  |          NA          |
|           |    new Number(NaN)     |   Number {NaN}    |                  | typeof new Number(NaN) -> 'object'      |        Number        |
|           |        Infinity        |     Infinity      |                  | typeof Infinity -> 'number'             |          NA          |
|           |  new Number(Infinity)  | Number {Infinity} |                  | typeof new Number(Infinity) -> 'object' |        Number        |
| BigInt    | BigInt(5) / BigInt(5n) |        5n         |        NO        | typeof BigInt(5) -> 'bigint'            |          NA          |
|           |           5n           |        5n         |                  | typeof 5n -> 'bigint'                   |          NA          |
| String    |    new String('a')     |   String {'a'}    |       Yes        | typeof new String('a') -> 'object'      |        String        |
|           |          'b'           |        'b'        |                  | typeof 'b' -> 'string'                  |          NA          |
|           |      String('c')       |        'c'        |                  | typeof String('c') -> 'string'          |          NA          |
| Symbol    |        Symbol()        |     Symbol()      |        No        | typeof Symbol() -> 'symbol'             |          NA          |

//Reference Types(This table does not make sense, but I still want to keep it here, to compare with the primitive types table)
| Type     | How to Create | Create Result | typeof | instanceof/prototype |
| :------- | :-----------: | :-----------: | :----: | :------------------: |
| Array    |  new Array()  |  [] / Array   | object |        Array         |
|          |     [1,2]     |     [1,2]     |        |                      |
| Function | function(){}  | function(){}  | object |       Function       |
......


### Function
function is a special object, we can typeof to check it's type(return 'function'), and we also can use instanceof to check it's type(instanceof Function return true)

```javascript
const a = function() {};
typeof a; // 'function'
a instanceof Function; // true
```
when 

```javascript

```

### Object
