/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let arr = path.split("/")
    let int = 0
    let curArr = []
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        if (a == "." || a == "") {
            continue
        }
        if (a == "..") {
            curArr.splice(-1, 1)
            continue
        }
        curArr.push(a)
    }
    return "/" + curArr.join("/")
};
// @lc code=end

