/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

    let count = 0
    let wl = 0
    /** @type {string[]} 注解 */
    let arr = []
    /** @type {string[]} 注解 */
    let res = []
    for (let i = 0; i < words.length + 1; i++) {
        let w = words[i]
        if (w == null) {
            let s = arr.join(" ")
            res.push(s + (new Array(maxWidth - s.length + 1).join(" ")))
            break
        }
        if (wl + w.length + (count == 0 ? 0 : 1) > maxWidth) {

            let s = (maxWidth - wl)
            if (count == 1) {
                res.push(arr[0] + new Array(s + 1).join(" "))
            }
            else if (count == 2) {
                res.push(arr[0] + new Array(s + 2).join(" ") + arr[1])
            }
            else {
                let l = s % (count - 1)
                let n = Math.floor(s / (count - 1))
                let child = ""
                for (let j = 0; j < arr.length; j++) {
                    let k = ""
                    if (j != 0) {
                        k = new Array(n + 2 + (l == 0 ? 0 : 1)).join(" ")
                        l = Math.max(0, l - 1)
                    }
                    child += k + arr[j]
                }
                res.push(child)
            }
            count = 0
            wl = 0
            arr = []
        }
        wl += w.length
        if (count != 0) {
            wl += 1
        }
        count++
        arr.push(w)

    }
    return res
};
// @lc code=end

