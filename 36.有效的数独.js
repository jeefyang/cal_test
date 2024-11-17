/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {
        let row = new Set()
        let col = new Set()
        let box = new Set()
        for (let j = 0; j < 9; j++) {
            let r = board[i][j]
            if (r != "." && row.has(r)) {
                return false
            }
            row.add(r)
            let c = board[j][i]
            if (c != "." && col.has(c)) {
                return false
            }
            col.add(c)
            let b = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
            if (b != "." && box.has(b)) {
                return false
            }
            box.add(b)
        }
    }
    return true
};
// @lc code=end

