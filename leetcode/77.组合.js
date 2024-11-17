/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    /** @type {number[][]} 注解 */
    let res = []
    let go = (resChild, l) => {
        if (resChild.length == k) {
            res.push([...resChild])
            return
        }
        for (let i = l; i <= n; i++) {
            resChild.push(i)
            go(resChild, i + 1)
            resChild.pop()
        }
    }
    go([], 1)
    return res

};
// @lc code=end

