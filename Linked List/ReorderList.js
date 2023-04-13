/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

*/


class ListNode {
    constructor(val){
        this.val = val;
        this.next = next;
    }
}

const reorderList = (head) => {
    

}

//Second attempt using HashMap
// const reorderList = (head) => {
//     const hashMap = {};
//     let length = 0;
//     let current = head;

//     while(current){
//         length++;
//         hashMap[length] = new ListNode(current.val);
//         current = current.next;
//     }

//     current = head;
//     let count = 1;

//     console.log(length);
//     console.log(hashMap)

//     while(current){
//         if(count % 2 === 1) {
//             current.next = hashMap[length];
//             count++;
//         } 
//         else {
//             current.next = hashMap[count];
//             length--;
//             count++;
//         }

//         current = current.next;
//     }

//     return head;

// }



//First attempt using 2 pointers
// const reorderList = (head) => {

//     const stack = [];

//     let slow = head;
//     let fast = head;

//     while(fast && fast.next){
//         slow = slow.next;
//         fast = fast.next.next;
//     }


//     while(slow){
//         stack.push(slow.val);
//         slow = slow.next;
//     }

//     let current = head;

//     while(current){
//         let temp = current.next;
//         if(stack.length > 0){
//             const newNode = new ListNode(stack.pop());
//             current.next = newNode;
//             newNode.next = temp;
//             current = temp;
//         }
//     }

//     return head;

// };




