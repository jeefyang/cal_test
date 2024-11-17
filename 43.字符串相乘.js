/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    // if ((num1.length == 1 && num1[0] == 0) || (num2.length == 1 && num2[0] == 0)) {
    //     return "0"
    // }
    // let a = 0
    // let res = []
    // for (let i = num1.length - 1; i >= 0; i--) {
    //     for (let j = num2.length - 1; j >= 0; j--) {
    //         let a = Number(num1[i]) * Number(num2[j])
    //         let ai = num1.length - i - 1
    //         let aj = num2.length - j - 1
    //         if (res[aj + ai] == null) {
    //             res[aj + ai] = 0
    //         }
    //         a += res[aj + ai]
    //         res[aj + ai] = (a % 10)
    //         let f = Math.floor(a / 10)
    //         if (f != 0) {
    //             if (res[aj + ai + 1] == null) {
    //                 res[aj + ai + 1] = 0
    //             }
    //             res[aj + ai + 1] += f
    //         }
    //     }
    // }
    // console.log(res)
    // res.reverse()
    // return res.join("")
    let len1 = num1.length
    let len2 = num2.length

    if ((len1 == 1 && num1[0] == 0) || (len2 == 1 && num2[0] == 0)) {
        return "0"
    }

    let res = new Array(len1 + len2).fill(0)
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let p = i + j
            let a = res[p + 1] + (Number(num1[i]) * Number(num2[j]))
            res[p + 1] = a % 10
            res[p] += Math.floor(a / 10)
        }
    }
    if (res[0] == 0) {
        res.shift()
    }
    return res.join('')
};
// @lc code=end

