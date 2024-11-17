/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    /** @type {number[][]} 注解 */
    let res = []
    /** 
     * @param {number} [t] 
     * @param {number} [l] 起点
     * @param {number[]} [arr]
     */
    const find = (t, l = 0, arr = []) => {
        for (let i = l; i < candidates.length; i++) {
            let c = t - candidates[i]
            if (c < 0) {
                continue
            }
            else if (c == 0) {
                let newArr = [...arr, candidates[i]]
                res.push(newArr)
                continue
            }
            find(c, i, [...arr, candidates[i]])
        }
    }
    find(target)
    return res
};
// @lc code=end

