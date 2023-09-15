/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array = []
    arr.forEach((item,i) => {
        array.push(fn(item, i));
    });
    return array;
};