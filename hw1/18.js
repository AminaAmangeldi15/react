/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const res = arr.sort((a,b) => { return fn(a) - fn(b)});
    return res;
};