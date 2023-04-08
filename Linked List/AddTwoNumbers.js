/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
    const stack1 = [];
    const stack2 = [];
    const stack3 = [];
    let currentl1 = l1;
    let currentl2 = l2;
    let sum = 0;
    const head = new ListNode(null);
   
    while(currentl1 && currentl2){
       const node1 = currentl1.val ;
        stack1.push(node1);
        currentl1 = currentl1.next;
   
       const node2 = currentl2.val;
        stack2.push(node2);
        currentl2 = currentl2.next;
    }
   
    while(stack1.length && stack2.length){
       let carry = 0; 
       const node1 = stack1.pop();
       const node2 = stack2.pop();
   
       if(node1 + node2 > 9){
           let sum = node1 + node2;
           let rem = sum % 10;
           carry += sum / 10;
           stack3.push(rem);
       }
   
       else stack3.push(node1 + node2 + carry);
    }
   
       while(stack3.length){
           const currentNode = new ListNode(stack3.pop());
           if(head === null) head = currentNode; 
           else currentNode.next = currentNode;
       }
   
       return head.next;
       
   };