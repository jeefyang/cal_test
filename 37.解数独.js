/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    dfs(board);
};

// 计算
function dfs(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] != ".") {
                continue
            }
            // 尝试输入1-9
            for (let i = 1; i <= 9; i++) {
                const c = i.toString()
                // 循例判断
                if (isValid(board, row, col, c)) {
                    // 尝试输入数字带入继续计算
                    board[row][col] = c
                    if (dfs(board)) {
                        return true
                    }
                }
            }

            // 输入不对有冲突,则重置回空,等待其他可能存在可能
            // 例如存在一种可能5,6,7三层结构(简单例子);
            // 先是前两层1,2可行,第三层,无论如何都不行,第三层返回'.',递归回第二层
            // 第二层尝试其他数字皆不可,返回'.',再递归回第一层
            // 假设第一层切换数字3,第二层切换数值4,可行
            // 第三层还是不行,重复上面步骤
            // 终于来到第一层为5,第二层为6,第三层为7,通过校对,皆可行,直接返回true,完成计算
            // ps:这个例子只是用简单的方式讲述原理,实际情况上嵌套递归肯定比3层要多,不过原理都一样的
            board[row][col] = "."
            return false
        }
    }
    return true
}

// 是否有效
function isValid(board, row, col, c) {
    // 找到九宫格起点
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
        // 横竖排冲突了
        if (board[row][i] === c || board[i][col] === c) {
            return false
        }
        // 九宫格冲突
        const curRow = blockRow + Math.floor(i / 3);
        const curCol = blockCol + Math.floor(i % 3);
        if (board[curRow][curCol] === c) return false;
    }
    return true
}
// @lc code=end

