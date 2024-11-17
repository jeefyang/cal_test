/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //  O(n) 
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]===target){
    //         return i
    //     }
    // }
    // return -1

     //  O(log n) 
     // 通过二分法
    /** 左序数 */
    let left = 0;
    /** 右序数 */
    let right = nums.length - 1;

    while (left <= right) {
        /** 取中间序数 */
        let mid = Math.floor((left + right) / 2);

        // 刚好是目标直接返回
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[left] === target) {
            return left;
        }
        if (nums[right] === target) {
            return right;
        }

        // When dividing the roated array into two halves, one must be sorted.

        // Check if the left side is sorted
        // 判断左边是否是顺序排列
        if (nums[left] <= nums[mid]) {
            if (nums[left] < target && target < nums[mid]) {
                // target is in the left
                right = mid - 1;

            } else {
                // target is in the right
                left = mid + 1;
            }
        }

        // Otherwise, the right side is sorted
        // 否则,右边肯定是顺序排列
        else {
            if (nums[mid] < target && target < nums[right]) {
                // target is in the right
                left = mid + 1;

            } else {
                // target is in the left
                right = mid - 1;
            }
        }


    }
    return -1;

};
// @lc code=end

