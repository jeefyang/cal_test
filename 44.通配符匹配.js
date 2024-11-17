/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sidx = 0
    let pidx = 0
    let ssidx = -1
    let spidx = -1
    while (sidx < s.length) {
        if (p[pidx] == s[sidx] || p[pidx] == "?") {
            pidx++
            sidx++
            continue
        }
        // 相当于下断点
        if (p[pidx] == "*") {
            spidx = pidx
            ssidx = sidx
            pidx++
            continue
        }
        // 无法匹配且没有*直接返回false
        if (spidx == -1) {
            return false
        }
        // 假如前一个匹配为*,则切换回原来状态,字符继续向前
        pidx = spidx + 1
        sidx = ssidx + 1
        ssidx = sidx
    }
    for (let i = pidx; i < p.length; i++) {
        if (p[i] !== "*") return false;
    }
    return true
};

// @lc code=end