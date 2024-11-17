/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i] - 1
        // 相同就不动了
        if (i === idx || nums[i] == nums[idx]) {
            continue
        }
        //序数小于整体数量就触发置换大法
        // 再继续在当前节点遍历(循环遍历到不动,其实就是排序了)
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]]
            i--;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 == nums[i]) {
            continue
        }
        return i + 1
    }
    return nums.length + 1
};
// @lc code=end

