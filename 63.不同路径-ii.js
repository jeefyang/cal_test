/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] == 1) {
        return 0
    }
    let a = obstacleGrid[obstacleGrid.length - 1]
    if (obstacleGrid.length == 1) {
        if (a.findIndex(i => i == 1) != -1) {
            return 0
        }
        return 1
    }
    if (a.length == 1) {
        if (obstacleGrid.findIndex(arr => arr.findIndex(i => i == 1) != -1) != -1) {
            return 0
        }
        return 1
    }
    let b = a[a.length - 1]
    if (b == 1) {
        return 0
    }
    let isZero = false
    for (let i = 0; i < obstacleGrid[0].length; i++) {
        if (obstacleGrid[0][i] == 1) {
            isZero = true
            continue
        }
        if (isZero) {
            obstacleGrid[0][i] = 0
        }
        else {
            obstacleGrid[0][i] = 2
        }
    }
    isZero = false
    for (let i = 0; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] == 1) {
            isZero = true
            continue
        }
        if (isZero) {
            obstacleGrid[i][0] = 0
        }
        else {
            obstacleGrid[i][0] = 2
        }
    }

    for (let i = 1; i < obstacleGrid.length; i++) {
        // let isZero = false
        for (let j = 1; j < obstacleGrid[i].length; j++) {
            if (obstacleGrid[i][j] == 1) {
                // isZero = true
                continue
            }
            let x = obstacleGrid[i][j - 1]
            if (x == 1) {
                x = 0
            }
            let y = obstacleGrid[i - 1]?.[j]
            if (y == 1) {
                y = 0
            }
            obstacleGrid[i][j] = x + y
        }
    }
    a = obstacleGrid[obstacleGrid.length - 1]
    b = a[a.length - 1]
    return b / 2
};
// @lc code=end

