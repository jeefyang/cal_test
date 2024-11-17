/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // let count = 0
    // let go = (xm, xn) => {
    //     if (xm == 1 && xn == 1) {
    //         count++
    //         return
    //     }
    //     if (xm != 1) {
    //         go(xm - 1, xn)
    //     }
    //     if (xn != 1) {
    //         go(xm, xn - 1)
    //     }
    // }
    // go(m, n)
    // return count

    // 绘制棋盘
    let map = new Array(m).fill(new Array(n).fill(1))

    // 通过到达每个点的可能性累加
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            map[i][j] = map[i][j - 1] + map[i - 1][j]
        }
    }
    return map[m - 1][n - 1]
};
// @lc code=end

