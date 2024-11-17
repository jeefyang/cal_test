/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // 使用渗透大法,从外边缘累加进去,直到终点

    //侧边先累加
    for (let i = 1; i < grid.length; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let i = 1; i < grid[0].length; i++) {
        grid[0][i] += grid[0][i - 1]
    }

    //再中间往终点累加
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    let a = grid[grid.length - 1]
    return a[a.length - 1]
};
// @lc code=end

