function tuple() {
    var ts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ts[_i] = arguments[_i];
    }
    return ts;
}
Array.prototype.zip = function (list) {
    return this.map(function (v, k) {
        return tuple(v, list[k]);
    });
};
