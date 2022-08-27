//// Exercise 1: decide if the first type is assignable to the second type


/// 1 and number --> yes
const oneLiteral: 1 = 1
const numb: number = oneLiteral


/// number and 1 --> no
let numbTwo: number
function test(input: 1) {
    return input;
}
// Argument of type 'number' is not assignable to parameter of type '1'.
// test(numbTwo)


/// string and number | string --> yes
let str: string
const strAndNumber: number | string = str


/// boolean and number --> no
let boo: boolean
// Type 'boolean' is not assignable to type 'number'.
// const numbThree: number = boo 


/// number[] and (number | string)[] --> yes
let numArr: number[]
const numOrStrArr: (number | string)[] = numArr


/// (number | string)[] and number[] --> no
let numOrStrArrTwo: (number | string)[]
// Type '(string | number)[]' is not assignable to type 'number[]'.
// const numArrTwo: number[] = numOrStrArrTwo


/// {a: true} and {a: boolean} --> yes
let obj: {a: true}
const objTwo: {a: boolean} = obj


/// {a: {b: [string]}} and {a: {b: [number | string]}}
let complexObj: {a: {b: [string]}}
const complexObjTwo: {a: {b: [number | string]}} = complexObj


/// (a: number) => string and (b: number) => string --> yes
let funcOne: (a: number) => string = (a: number) => 'done'
function takesFuncs(func: (b: number) => string) {
    return func
}
takesFuncs(funcOne)


/// (a: number) => string and (a: string => string) --> no
let funcTwo: (a: number) => string = (a: number) => 'done'
function takesFuncsTwo(func: (a: string) => string) {
    return func
}
// Argument of type '(a: number) => string' is not assignable 
// to parameter of type '(a: string) => string'.
// takesFuncsTwo(funcTwo)


/// (a: number | string) => string and (a: string) => string --> yes
let funcThree: (a: number | string) => string = (a: number | string) => 'done'
function takesFuncsThree(func: (a: string) => string) {
    return func
}
// You CAN assign according to rules of function variance
const funXy = takesFuncsThree(funcThree)
// Argument of type 'number' is not assignable to parameter of type 'string'.
// funXy(3)


// E.X and F.X --> no
enum E {
    O = 'O'
}

enum F {
    O = 'O'
}

let eO: E.O
// Type 'E.O' is not assignable to type 'F'.
// const fO: F.O = eO
