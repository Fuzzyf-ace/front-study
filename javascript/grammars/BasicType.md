
### Primitive Types
Null
Undefined
Boolean
Number
String
Symbol

### Reference Types
Object
Array
Function

### instanceof && typeof

typeof might return the followings: "undefined", "object", "function", "boolean", "number", "bigint", "string", "symbol" [[from mdn]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)


| Type      |   How to Create    |  Create Result  | Has Constructor? |                typeof                 | instanceof/prototype |
| :-------- | :----------------: | :-------------: | :--------------: | :-----------------------------------: | :------------------: |
| Null      |    null keyword    |      null       |        NO        |        typeof null -> 'object'        |          NA          |
| Undefined | undefined keyword  |    undefined    |        No        |    typeof undefined -> 'undefined'    |          NA          |
| Boolean   | true/false keyword |   true/false    |       Yes        |       typeof false -> 'boolean'       |          NA          |
|           |     Boolean()      |   true/false    |                  |                                       |          NA          |
|           |   new Boolean()    | Boolean {false} |                  | typeof new Boolean(false) -> 'object' |       Boolean        |
| Number    |                    |                 |                  |                                       |                      |

