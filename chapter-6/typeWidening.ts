// let or var declarations get widened to base type
let a = 'something' // string
let b = 71 // number
let c = false // boolean
let d = {x: 41} // {x: number}
enum E { X, Y, Z }
let e = E.Y // E

// const does not get type widened
const A = 'something' // "something"
const B = 17 // 17
const C = true // true

// Use explict type annotations to prevent type widening
let aX: 'something' = 'something' // 'something'
let bX: 71 = 71 // 71
let cX: false = false // false
let dX: {x: 41} = {x: 41} // {x: 41}

// Reassignments get widened
const x = 'x'
let newX = x // string

// Use explicit annotations to avoid reassigments getting widened
const y: 15 = 15
let newY = y // 15

// null or undefined gets widened to any
let z = undefined
z = 141
z = 'b'