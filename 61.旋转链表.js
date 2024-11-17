/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
    if (k == 0) {
        return head
    }
    let count = 0
    let clone = head
    while (clone) {
        count++
        clone = clone.next
    }
    if (count <= 1) {
        return head
    }


    let n = k % count
    if (n == 0) {
        return head
    }
    let first = head
    for (let i = 0; i < count - n; i++) {
        first = first.next
    }
    // console.log(decodeListNode(first))
    let last = head
    // console.log(count - n)
    for (let i = 0; i < count - n - 1; i++) {
        last = last.next
    }
    // console.log(decodeListNode(last))
    last.next = null
    // console.log(decodeListNode(head))
    let mid = first
    for (let i = 1; i < n; i++) {
        mid = mid.next
    }
    mid.next = head

    return first
};
// @lc code=end

