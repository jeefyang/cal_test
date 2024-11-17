let arr = [4, 5, 1, 9]
/** @type {ListNode<number>[]} 注解 */
let nodeList = []
for (let i = 0; i < arr.length; i++) {
    /** @type {ListNode<number>} 注解 */
    let node = { va }
}

let decodeListNode = (list) => {
    let res = []
    while (list) {
        res.push(list.val)
        list = list.next
    }
    return res
}
// console.log(decodeListNode(rotateRight(encodeListNode([1, 2]), 2)))
console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS"))

