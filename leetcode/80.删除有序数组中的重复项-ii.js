/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] == nums[i + 1] && nums[i] == nums[i + 2]) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};
// @lc code=end

