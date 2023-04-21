/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Optimized solition (Tortoise & Hare)
//Time complexity: O(n)
//Space complexity: O(1)


const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
     
      fast = fast.next.next;
      slow = slow.next;
      
    }

    return slow;
 
}




//Brute force solution
//Time complexity: O(n)
//Space complexity: O(1)

// const middleNode = (head) => {
//     let current = head;
//     let len = 0;

//     while(current) {
//         len++;
//         current = current.next;
//     }

//     current = head;
//     let count = 0;

//     while(current) {
//         if(count === Math.floor(len / 2)) return current;
//         count++;
//         current = current.next;
//     }
// }