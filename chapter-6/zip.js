"use strict";
exports.__esModule = true;
require("./prototype");
var sample = [1, 2, 3]
    .map(function (n) { return Math.pow(n, 2); })
    .zip(['x', 'y', 'z']);
console.log(sample);
