//console.log('Hello Typescript'!)

// a is cast to a string 
let a = 1 + 2 + '3'
// b remains a string
let b = a + {}
let c = {
    apple: a,
    banana: b
}
// this throws a TypeError
//let d = c.apple * 4
// this works fine
let e = Number(c.banana) * 5 
