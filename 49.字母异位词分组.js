/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let res = {}
    for (let i = 0; i < strs.length; i++) {
        let a = strs[i].split("").sort().join("")
        if (!res[a]) {
            res[a] = []
        }
        res[a].push(strs[i])
    }
    let data = []
    for (let key in res) {
        data.push(res[key])
    }
    return data
};
// @lc code=end

