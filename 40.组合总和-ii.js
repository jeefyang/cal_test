/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    /** @type {number[][]} 注解 */
    let res = []
    /** 
     * @param {number} [t] 
     * @param {number} [l] 起点
     * @param {number[]} [arr]
     */
    const find = (t, l = 0, arr = []) => {
        for (let i = l; i < candidates.length; i++) {
            if (i > l && candidates[i] == candidates[i - 1]) {
                continue
            }
            let c = t - candidates[i]
            if (c < 0) {
                continue
            }
            else if (c == 0) {
                res.push( [...arr, candidates[i]])
                continue
            }
            find(c, i + 1, [...arr, candidates[i]])
        }
    }
    candidates = candidates.sort()
    find(target)
    return res
};
// @lc code=end

