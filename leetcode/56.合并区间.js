/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {


    // let isCut = true
    // while (isCut) {
    //     isCut = false
    //     for (let i = 0; i < intervals.length; i++) {
    //         if (isCut) {
    //             break
    //         }
    //         let a = intervals[i]
    //         for (let j = i + 1; j < intervals.length; j++) {
    //             let b = intervals[j]
    //             if (
    //                 (a[0] <= b[0] && a[1] >= b[0]) ||
    //                 (b[0] <= a[0] && b[1] >= a[0])
    //             ) {
    //                 intervals.push([Math.min(...a, ...b), Math.max(...a, ...b)])
    //                 intervals.splice(j, 1)
    //                 intervals.splice(i, 1)
    //                 isCut = true
    //                 break
    //             }
    //         }
    //     }
    // }
    // return intervals

    intervals.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])
    let prev = intervals[0]
    let res = [prev]
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(cur[1], prev[1])
            continue
        }
        prev = cur
        res.push(prev)
    }
    return res

};
// @lc code=end

