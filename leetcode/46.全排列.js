/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    /** @type {number[][]} 注解 */
    let res = []
    let go = (child, arr) => {
        if (arr.length == 0) {
            res.push(child)
            return
        }
        for (let i = 0; i < arr.length; i++) {
            let newChild = [...child, arr[i]]
            let newArr = [...arr.slice(0, i), ...arr.slice(i + 1)]
            go(newChild, newArr)
        }
    }
    go([], nums)
    return res
};
// @lc code=end

