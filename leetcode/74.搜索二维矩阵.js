/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let row = 0
    let col = matrix[0].length - 1
    while (col >= 0 && row <= matrix.length - 1) {
        if (matrix[row][col] === target) {
            return true
        }
        else if (matrix[row][col] < target) {
            row++
        }
        else {
            col--
        }
    }

    return false


};
// @lc code=end

