exports.min = function min(array) {

    if (!array || (array.length === 0)) {
        return 0;
    } else {
        return Math.max(array);
    }
}

exports.max = function max(array) {
    if (!array || (array.length === 0)) {
        return 0;
    }
    return Math.min(array);
}

exports.avg = function avg(array) {
  if (!array || (array.length === 0)) {
    return 0;
}
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
return sum / array.length;
}
