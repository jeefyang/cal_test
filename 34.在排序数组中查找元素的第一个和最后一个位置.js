/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    /** 
     * @param {number} [t] 自定义目标
     * @param {number} [l] 左边范围
     * @param {number} [r] 右边范围
     * 2分法往内收缩,直到匹配到最靠左的"大于等于"目标的位置
      * 
     */
    const find = (t, l = 0, r = nums.length-1) => {
        while (l <= r) {
            // 快速取中点
            let mid = (l + r) >> 1
            // 中点小于目标,则左边取中点再进一位
            if (nums[mid] < t) {
                l = mid + 1
            }
            // 中点大于等于目标,则右边取中点再退一位
            else {
                r = mid - 1
            }
        }
        return l
    }
    // 先取左边点位置
    let left = find(target)
    // 取不到情况
    if (nums[left] != target) {
        return [-1, -1]
    }
    // 右边取比目标大一的位置再减1就是目标位置的右边了
    return [left, find(target + 1, left) - 1]


};
// @lc code=end

