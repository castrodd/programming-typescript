function is<T>(
    ...args: T[]
): boolean {
    if (args.length) {
        const baseValue = args[0]
        return args.every(value => value === baseValue)
    }

    return false
}

// Compare a string and a string
let one = is('string', 'otherString') // false
console.log(one)

// Compare a boolean and a boolean
let two = is(true, false) // false
console.log(two)

// Compare a number and a number
let three = is(42, 42) // true
console.log(three)

// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// let four = is(10, 'foo')

let five = is([1], [1, 2], [1, 2, 3]) //false
console.log(five)