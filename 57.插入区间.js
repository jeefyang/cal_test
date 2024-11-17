/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = []
    let isLast = 0
    for (let i = 0; i < intervals.length; i++) {
        let a = intervals[i]
        if (newInterval[1] < a[0]) {
            break
        }
        if (
            newInterval[0] > a[1] ||
            a[0] > newInterval[1]
        ) {
            if (isLast < 0) {
                break
            }
            isLast = i + 1
            res.push(a)
            continue
        }
        isLast = -i - 1
        newInterval = [Math.min(newInterval[0], a[0]), Math.max(newInterval[1], a[1])]
    }
    isLast = Math.abs(isLast)
    res.push(newInterval, ...intervals.slice(isLast))
    return res
};
// @lc code=end

