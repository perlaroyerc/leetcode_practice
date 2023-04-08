/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {

    let current = head;
    let size = 0;
    let count = 0;

    //Get the size of the list
    while(current){
        size++;
        current = current.next;
    }

    //Restart current pointer
    current = head;

    //if the n node is the head remove it from the list
    if(size === n) head = head.next;

    //traverse to find the nth node
    while(current.next){
        count++;
        
        if(count === size - n){
            let next = current.next;
            current.next = current.next.next;
            current = next;
        } 
        else current = current.next;
    
    }

    return head;

    
};

