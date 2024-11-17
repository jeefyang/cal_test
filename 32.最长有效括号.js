/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    /** 0位表示记录起始点,即"("前一位 */
    let stack = [-1]
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i)
        }
        // 记录起始点
        else if (stack.length == 1) {
            stack[0] = i
        }
        else {
            // ")"抵消"("
            stack.pop()
            // 通过起始点判断长度,再对比最长长度
            ans = Math.max(ans, i - stack[stack.length - 1])
        }
    }
    return ans
};
// @lc code=end

