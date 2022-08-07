function is() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length) {
        var baseValue_1 = args[0];
        return args.every(function (value) { return value === baseValue_1; });
    }
    return false;
}
// Compare a string and a string
var one = is('string', 'otherString'); // false
console.log(one);
// Compare a boolean and a boolean
var two = is(true, false); // false
console.log(two);
// Compare a number and a number
var three = is(42, 42); // true
console.log(three);
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// let four = is(10, 'foo')
var five = is([1], [1, 2], [1, 2, 3]); //false
console.log(five);
