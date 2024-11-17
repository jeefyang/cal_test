/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a.length < b.length) {
        let temp = a
        a = b
        b = temp
    }
    let alen = a.length - 1
    let delta = a.length - b.length
    let more = 0
    let s = ""
    for (let i = alen; i >= 0; i--) {
        let t = Number(a[i]) + Number(b[i - delta] || 0) + more

        if (t === 3) {
            s = "1" + s
            more = 1
        }
        else if (t === 2) {
            s = "0" + s
            more = 1
        }
        else {
            s = t + s
            more = 0
        }
    }
    if (more) {
        s = "1" + s
    }
    return s
};
// @lc code=end

