/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    /** @type {number[][]} 注解 */
    let res = []
    let go = (child, arr) => {
        if (arr.length == 0) {
            res.push(child)
            return
        }
        let map = []
        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]] == 1) {
                continue
            }
            map[arr[i]] = 1
            let newChild = [...child, arr[i]]
            let newArr = [...arr.slice(0, i), ...arr.slice(i + 1)]
            go(newChild, newArr)
        }
    }
    go([], nums)
    return res
};
// @lc code=end

