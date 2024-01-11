function echo<T> (input: T) : T {
    return input
}

const output: string = echo('123'); //the input and the output have consistent types

function swap<T, U> (tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const swapped: [string, number] = swap([123, '123'])

function getLength<T extends {length: number}>(input: T): number {
    return input.length;
}

console.log(getLength('123'))

