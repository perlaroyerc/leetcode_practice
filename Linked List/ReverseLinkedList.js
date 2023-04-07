/*
Given a linked list, reverse it.

Linked list: A data structure which is made up of nodes. 
Each node holds some data and a pointer to the next node. 
The first node is referenced using a pointer called head and the last node’s next pointer is set to null.

Example 1:
Input: 1->2->3->NULL
Output: 3->2->1->NULL
Explanation: The linked list is reversed by sending first node in the end and bringing last node to the front.

Example 2:
Input: 1->NULL
Output: 1->NULL
Explanation: The reverse of a single node linked list is the original list itself.

*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const reverseList = (head) => {

    let current = head;
    let previous = null;

    while(current){
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;

}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(reverseList(a));