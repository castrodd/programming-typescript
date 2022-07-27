"use strict";
//console.log('Hello Typescript'!)
// a is cast to a string 
let a = 1 + 2 + '3';
// b remains a string
let b = a + {};
let c = {
    apple: a,
    banana: b
};
// this throws a TypeError
//let d = c.apple * 4
// this works fine
let e = Number(c.banana) * 5;
const truth = 'yes';
let x = Math.random() < .5;
if (x) {
    let b = 'blue';
    const truth = 'no';
    console.log(b, truth);
}
else {
    let c = 'red';
    console.log(c, truth);
}
//Block-scoped const can't be declared twice
//const truth = 'dont know'
//# sourceMappingURL=index.js.map