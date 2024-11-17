/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = []
    /** @type {[x in string]:number} 注解 */
    let map = []
    let last = n * n
    let cur = 1
    let maxx = n
    let maxy = n - 1
    let curX = 0
    let curY = 0
    let dx = 1
    let dy = 0
    while (cur <= last) {
        // cur++
        if (dx) {
            for (let i = 0; i < maxx; i++) {
                map[curX * n + curY] = cur
                curX += dx
                cur++
            }
            curX -= dx
            curY += dx
            maxx--
            dy = dx
            dx = 0
        }
        else {
            for (let i = 0; i < maxy; i++) {
                map[curX * n + curY] = cur
                curY += dy
                cur++
            }
            curX -= dy
            curY -= dy
            maxy--
            dx = -dy
            dy = 0
        }
    }
    for (let i = 0; i < n; i++) {
        let child = []
        for (let j = 0; j < n; j++) {
            child.push(map[j * n + i])
        }
        res.push(child)
    }
    return res
};
// @lc code=end

