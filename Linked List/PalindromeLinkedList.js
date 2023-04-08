/*

Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


const isPalindrome = (head) => {
    const stack = [];
    let current = head;
 
     while(current){
         stack.push(current.val);
         current = current.next;
     }
 
     current = head;
     
     while(current){
         const topNode = stack.pop();
         if(topNode !== current.val) return false;
         current = current.next;
     }
 
     return true;
}

/*
const isPalindrome = (head) => {

    const stack = [];
    const queue = [];
    let current = head;
 
     while(current){
         stack.push(current.val);
         queue.unshift(current.val);
         current = current.next;
     }
 
     if(stack.length !== queue.length) return false;
 
     while(stack.length && queue.length){
         let top = stack.pop();
         let front = queue.pop();
         if(top !== front) return false;
     }
 
     return true;
     
 };

 */