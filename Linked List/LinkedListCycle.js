/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Time complexity: O(n)
//space complexity: O(n)

const hasCycle = (head) => {
    const hashSet = new Set();
    let current = head;

    while(current){
        if(hashSet.has(current)) return true;
        else hashSet.add(current);
        current = current.next;
    }

    return false;
};


//Floyd’s Tortoise and Hare Algorithm
//Time complexity: O(n)
//Space complexity: O(1)

const hasCycle2 = (head) => {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;

        if(slow === fast) return true;
    }

    return false;
}