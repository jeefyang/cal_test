/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // 实现常数空间的方法为,将0标记在行和列上,只需标记0列或者0行是否为0即可,
    let m = matrix.length
    let n = matrix[0].length
    let isZeroCol = false
    let isZeroRol = false
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                // 标记
                matrix[i][0] = matrix[0][j] = 0
                // 记录0列和0行
                if (i == 0) {
                    isZeroCol = true
                }
                if (j == 0) {
                    isZeroRol = true
                }
            }
        }
    }

    for (let i = 1; i < m; i++) {
        if (matrix[i][0] == 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0
            }
        }
    }
    for (let i = 1; i < n; i++) {
        if (matrix[0][i] == 0) {
            for (let j = 1; j < m; j++) {
                matrix[j][i] = 0
            }
        }
    }
    if (isZeroCol) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0
        }
    }
    if (isZeroRol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }
    return
};
// @lc code=end

