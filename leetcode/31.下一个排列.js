/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    //例子为51432
    for (let i = nums.length - 1; i >= 0; i--) {
        //从后往前找,找到前面比后面小的节点
        if (nums[i] < nums[i + 1]) {
            // 往后找比i位置到的数
            const large = nextLarge(i);
            // 对换
            swap(i, large)
            //例子变成52431,此时需要反转后面的顺序即可
            reverse(i + 1)
            // 反转为52134
            return
        }
    }
    // 找不到,直接轮回
    reverse(0)

    /** 
     * 交换数值
     * @param {number} [i] 注解
     * @param {number} [j] 注解
     */
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    /** 
     * 在有限的序列反序(起点到尽头)
     * @param {number} [index] 起点
     */
    function reverse(index) {
        let start = index
        let end = nums.length - 1
        while (start < end) {
            swap(start, end)
            start++
            end--
        }
    }

    /** 
     * 在有限的顺序中下个最大值(起点到尽头)
     * @param {number} [index] 起点
     */
    function nextLarge(index) {
        for (let i = nums.length - 1; i > index; i--) {
            if (nums[i] > nums[index]) {
                return i;
            }
        }
    }
};
// @lc code=end

