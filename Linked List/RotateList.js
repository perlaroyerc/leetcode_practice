/*
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]

*/

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const rotateRight = (head, k) => {

        if(!head || !k) return head;

    let current = head;
    let len = 0;

    while(current){
        len++;
        current = current.next;
    }
    
    k = k % len;

    if(k === 0) return head;

    
}