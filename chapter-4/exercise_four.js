function call(f, first, second) {
    return f(first, second);
}
function fill(length, value) {
    return Array.from({ length: length }, function () { return value; });
}
var a = call(fill, 10, 'a');
console.log(a);
// Expected 3 arguments, but got 2.ts(2554)
//let b = call(fill, 10)
// Expected 3 arguments, but got 4.ts(2554)
//let c = call(fill, 10, 'a', 'z')
var d = call(fill, 10, 20);
