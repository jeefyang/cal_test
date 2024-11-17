/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    /** @type {any} 注解 */
    let res = []
    let int = words[0]?.length || 0
    let len = words.length
    let wlen = 0
    words.forEach(ss => {
        wlen += ss.length
    })
    let getSFunc = (i) => {
        let d = ""
        for (let j = 0; j < int; j++) {
            d += s[j + i]
        }
        return d
    }

    for (let i = 0; i <= (s.length - wlen); i++) {
        let d = getSFunc(i)
        let index = words.indexOf(d)
        if (index == -1) {
            continue
        }
        let cloneWords = [...words]
        cloneWords[index] = null
        let clone = []
        for (let j = 1; j < len; j++) {
            clone.push(getSFunc(i + int * j))
        }
        clone.find(ss => {
            let index = cloneWords.indexOf(ss)
            if (index == -1) {
                return true
            }
            cloneWords[index] = null
            return false
        });
        (cloneWords.findIndex(x => x !== null) === -1) && res.push(i)
    }
    return res
};
// @lc code=end

