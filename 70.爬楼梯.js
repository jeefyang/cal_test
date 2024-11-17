/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let fn = 1
    let fn1 = 0
    let fn2 = 0
    for (let i = 1; i <= n; i++) {
        fn2 = fn1
        fn1 = fn
        fn = fn1 + fn2
    }
    return fn
};
// @lc code=end

