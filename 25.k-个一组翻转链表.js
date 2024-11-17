/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    /** @type {number[]} 注解 */
    let temp = []
    let start = head
    while (start != null) {
        let end = start
        for (let i = 0; i < k; i++) {
            temp.push(end.val)
            end = end.next
            if (end == null) {
                break;
            }
        }
        end = start
        start = null
        if (temp.length == k) {
            for (let i = temp.length - 1; i >= 0; i--) {
                end.val = temp[i]
                end = end.next
            }
            start = end
        }
        temp = []
    }
    return head
};
// @lc code=end

