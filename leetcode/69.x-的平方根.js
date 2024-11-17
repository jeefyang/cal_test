/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 1
    let right = Math.floor(x / 2) + 1
    let mid
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        let a = mid * mid
        if (a > x) {
            right = mid - 1
        }
        else if (a < x) {
            left = mid + 1
        }
        else {
            return mid
        }
    }
    return right
};
// @lc code=end

