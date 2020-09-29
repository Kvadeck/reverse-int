module.exports = function reverse (n) {
    let strArr = n.toString().split('').reverse();
    const index = strArr.indexOf('-');
    if (index > -1) { strArr.splice(index, 1) }
    return strArr.join('')
}