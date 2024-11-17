/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {

    // 自己
    // let arr = []
    // let curK = 0
    // let res = ""
    // for (let i = 0; i < n; i++) {
    //     arr[i] = i + 1
    // }
    // let go = (child, clone) => {
    //     if (clone.length == 0) {
    //         curK++
    //         if (curK == k) {
    //             res = child.join("")
    //             return true
    //         }
    //         return false
    //     }
    //     for (let i = 0; i < clone.length; i++) {
    //         let newChild = [...child, clone[i]]
    //         let newClone = [...clone.slice(0, i), ...clone.slice(i + 1)]
    //         if (go(newChild, newClone)) {
    //             return true
    //         }
    //     }
    // }
    // go([], arr)
    // return res

    // 官方
    // 通过拆分每级的排列可能进行快速计算
    /** 每层排列集合的数量 */
    let factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = i * factorial[i - 1];
    }

    let nums = Array.from({ length: n }, (v, i) => i + 1);

    // console.log(nums.toString(), factorial.toString());

    let res = "";
    for (let i = n - 1; i >= 0; i--) {
        index = Math.ceil(k / factorial[i]); // decide to use which permutation set
        res += nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[i] * (index - 1));
    }
    return res;

};

// @lc code=end



