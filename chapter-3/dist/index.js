"use strict";
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
// Won't work
// let sport: TwoSports = {ball: "basketball", shoes: "Jordans"}
// Exercises
let a = 1042;
let b = 'apples and oranges';
const c = 'pineapples';
let d = [true, true, false];
let e = { type: 'ficus' };
let f = [1, false];
const g = [3];
let h = null;
let i = 3;
// Type '4' is not assignable to type '3'.
//i = 4
i = 3;
let j = [1, 2, 3];
j.push(4);
// Argument of type 'string' is not assignable to parameter of type 'number'.
//j.push('5')
j.push(5);
// Type 'number' is not assignable to type 'never'.
//let k: never = 4
let k = 4;
let l = 4;
// Object is of type 'unknown'.
//let m = l * 2
if (typeof l === 'number') {
    let m = l * 2;
    console.log(m);
}
//# sourceMappingURL=index.js.map