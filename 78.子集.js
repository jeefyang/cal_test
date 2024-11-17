/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    /** @type {number[][]} 注解 */
    let res = []
    let go = (resChild, l) => {
        res.push([...resChild])
        for (let i = l; i < nums.length; i++) {
            resChild.push(nums[i])
            go(resChild, i + 1)
            resChild.pop()
        }
    }
    go([], 0)
    return res
};
// @lc code=end

