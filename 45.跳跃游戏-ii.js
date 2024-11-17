/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let len = nums.length - 1
    /** 跳转次数 */
    let count = 0
    /** 最后能跳到的指针 */
    let lastP = 0
    /** 覆盖范围 */
    let curCover = 0
    /**
     * 原理为:
     * 尽可能在覆盖范围获取最大值,然后叠加,最后算出叠加次数就是跳转的值
     */
    for (let i = 0; i < len; i++) {
        curCover = Math.max(curCover, nums[i] + i)
        if (i == lastP) {
            lastP = curCover
            count++
            if (curCover >= len) {
                return count
            }
        }
    }
    return count
};
// @lc code=end
