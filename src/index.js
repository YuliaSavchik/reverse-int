module.exports = function reverse (n) {
    let num = Math.abs(n)
    let str = String(num) 
    let arr = str.split('')
    let res = arr.reverse().join('')
    return Number(res)
}
