/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    /** +-符号 */
    let sign = false
    /** e */
    let isE = false
    /** 小数点 */
    let isPoint = false
    let numMap = {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
    }

    let isNum = false
    for (let i = 0; i < s.length; i++) {
        let a = s[i]

        if (a == "+" || a == "-") {
            if (sign || isNum || isPoint) {
                return false
            }
            sign = true
            continue
        }
        if (a == ".") {
            if (isPoint || isE) {
                return false
            }
            isPoint = true
            continue
        }
        if (a == "e" || a == "E") {
            if (isE || !isNum) {
                return false
            }
            sign = false
            isE = true
            isNum = false
            isPoint = false
            continue
        }
        if (numMap[a]) {
            isNum = true
            continue
        }
        return false
    }


    return isNum
};
// @lc code=end

