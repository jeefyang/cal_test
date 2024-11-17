/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let ilen = board.length
    let jlen = board[0].length
    /** 
     * @param {string[]} [way] 注解
     * @param {number} [curi] 注解
     * @param {number} [curj] 注解
     * @param {number} [curw] 注解
     */
    const goFunc = (curi, curj, curw) => {
        if (word[curw] != board[curi][curj]) {
            return false
        }
        if (board[curi][curj] == "*") {
            return false
        }
        if (curw == word.length - 1) {
            return true
        }
        board[curi][curj] = "*"
        if (ilen > curi + 1 && goFunc(curi + 1, curj, curw + 1)) {
            return true
        }
        if (curi - 1 >= 0 && goFunc(curi - 1, curj, curw + 1)) {
            return true
        }
        if (jlen > curj + 1 && goFunc(curi, curj + 1, curw + 1)) {
            return true
        }
        if (curj - 1 >= 0 && goFunc(curi, curj - 1, curw + 1)) {
            return true
        }
        board[curi][curj] = word[curw]
        return false
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != word[0]) {
                continue
            }
            if (goFunc(i, j, 0)) {
                return true
            }

        }
    }
    return false
};
// @lc code=end

