/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    /** @type {string[]} 注解 */
    let res = []
    /** 
     * @param {number} [l] 注解
     * @param {number} [r]
     * @param {string} [s]
     */
    const go =

        (l, r, s) => {
            if (s.length == n * 2) {
                res.push(s)
                return
            }
            if (l < n) go(l + 1, r, s + '(')
            if (r < l) go(l, r + 1, s + ")")
        }

    go(0, 0, "")
    return res
};
// @lc code=end

