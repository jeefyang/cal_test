/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let l = 0
    let r = height.length - 1

    let lmax = 0
    let rmax = 0
    let w = 0

    while (l < r) {
        lmax = Math.max(lmax, height[l])
        if (height[l] < lmax) {
            w += lmax - height[l]
        }

        rmax = Math.max(rmax, height[r])
        if (height[r] < rmax) {
            w += rmax - height[r]
        }
        //向最高边靠拢
        //巧妙之处,就是设置最高边不动(其中一条最高边是不作为的)
        height[l] < height[r] ? l++ : r--
    }
    return w

};
// @lc code=end
