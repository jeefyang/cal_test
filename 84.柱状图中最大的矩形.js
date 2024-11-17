/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let max = 0
    for (let i = 0; i < heights.length; i++) {
        let min = heights[i]
        let count = 0
        for (let j = i ; j < heights.length; j++) {
            count++
            if (heights[j] < min) {
                min = heights[j]
            }
            let cur = min * count
            if (cur > max) {
                max = cur
            }
        }
    }
    return max
};
// @lc code=end

