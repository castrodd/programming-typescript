var units = ['cm', 'px', '%'];
function parseUnit(value) {
    for (var i = 0; i < units.length; i++) {
        if (value.endsWith(units[i])) {
            return units[i];
        }
    }
    return null;
}
function parseWidth(width) {
    if (width == null) {
        return null;
    }
    if (typeof width === 'number') {
        return { unit: 'px', value: width };
    }
    var unit = parseUnit(width);
    if (unit) {
        return { unit: unit, value: parseFloat(width) };
    }
    return null;
}
console.log(parseWidth('14 px'));
