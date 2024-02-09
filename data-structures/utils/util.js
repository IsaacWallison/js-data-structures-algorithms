// utils functions

exports.Compare = Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

exports.defaultCompare = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

exports.defaultEquals = function (a, b) {
    return a === b;
}

exports.defaultToString = function (item) {
    if (item === null) {
        return "NULL";
    } else if (item === undefined) {
        return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}