/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let node1 = l1;
    let node2 = l2;
    let bufferNode = new ListNode(0, null);
    let listNode = bufferNode;
    while (node1 || node2) {
        let acc = ((node1?.val ?? 0) + (node2?.val ?? 0) + carry)
        let sum = acc % 10;
        carry = ~~(acc / 10);
        bufferNode.next = new ListNode(sum, null);
        node1 = node1?.next ?? null;
        node2 = node2?.next ?? null;
        bufferNode = bufferNode.next
    }

    if (carry != 0) {
        bufferNode.next = new ListNode(carry, null)
    }

    return listNode.next
};