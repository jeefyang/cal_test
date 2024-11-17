/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    // 分为两个波峰
    while (r >= l) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] == nums[r]) {
            r--
        }
        else if (nums[mid] < nums[r]) {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            }
            else {
                r = mid
            }
        }
        else {
            // 强制l是为了防止死循环,后面条件判断就是数值不在第一波峰,直接赶着l往第二波峰查找
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1
            }
            else {
                r = mid
            }
        }


    }
    return nums[l] == target
};
// @lc code=end

