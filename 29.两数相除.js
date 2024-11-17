/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    let a = dividend > 0 ? dividend : -dividend
    let b = divisor > 0 ? divisor : -divisor
    let isPositive = true
    if (dividend > 0 !== divisor > 0) {
        isPositive = false
    }
    let count = 1
    let res = 0
    let base = b
    while (a >= b) {
        count = 1
        base = b
        while (base <= (a >> 1)) {
            base = base << 1
            count = count << 1
        }
        res += count
        a -= base
    }
    if (!isPositive) {
        res = -res
    }
    return res
};
// @lc code=end

