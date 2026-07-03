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
    let currNode = new ListNode(0, null);
    let listNode = currNode;
    while (l1 || l2 || carry) {
        let acc = ((l1?.val ?? 0) + (l2?.val ?? 0) + carry)
        let sum = acc % 10;
        carry = ~~(acc / 10);
        currNode.next = new ListNode(sum);
        currNode = currNode.next

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }


    return listNode.next
};