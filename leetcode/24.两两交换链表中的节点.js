/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
   let cur=head
   let curNext=cur?.next
    while (cur!==null && curNext !== null) {
      let val=cur.val
      cur.val=curNext.val
      cur.next.val=val
      cur=cur.next?.next
      curNext=cur?.next
    }
    return head
};
// @lc code=end

