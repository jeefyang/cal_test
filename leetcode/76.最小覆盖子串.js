/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0
    let r = -1
    let map = {}
    let min = ""
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] == null) {
            map[t[i]] = 0
        }
        map[t[i]]++
    }
    let count = Object.keys(map).length
    while (r <= s.length) {
        if (count == 0) {
            let cur = s[l]
            if (map[cur] != null) {
                map[cur]++
            }
            if (map[cur] > 0) {
                count++
            }
            let temp = s.substring(l, r + 1)
            if (min == "") {
                min = temp
            }
            else {
                min = min.length < temp.length ? min : temp
            }
            l++
            continue
        }
        r++
        let cur = s[r]
        if (map[cur] != null) {
            map[cur]--
        }
        if (map[cur] === 0) {
            count--
        }
    }
    return min
};
// @lc code=end

