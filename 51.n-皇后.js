/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {


    const res = []
    /** 
     * @param {number[]} [board] 注解
     */
    let go = (board, r) => {
        if (r === n) {
            res.push(board.map(c => ".".repeat(c) + "Q" + ".".repeat(n - c - 1)))
            return
        }
        for (let c = 0; c < n; c++) {
            if (!board.some((bc, i) => bc === c || bc === c + r - i || bc === c - r + i)) {
                board.push(c)
                go(board, r + 1)
                // 清空数组
                board.pop()
            }
        }
    }
    go([], 0)
    return res

};
// @lc code=end

