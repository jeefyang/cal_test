/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let count = 0
    /** 
        * @param {number[]} [board] 注解
        */
    let go = (board, r) => {
        if (r === n) {
            count++
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
    return count
};
// @lc code=end

