enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

//we can use const enum here to improve performance by generating less js code
const enum ConstDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
let value = 0
if (value === ConstDirection.UP) {
    console.log('go up')
}