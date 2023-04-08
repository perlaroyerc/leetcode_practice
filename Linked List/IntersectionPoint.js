/*
Given two singly linked lists of size N and M, 
write a program to get the point where two linked lists intersect each other.
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//Space complexity: O(n)
//Time complexity: O(n)

const intersectionPoint = (h1, h2) => {

    let current = h1;
    const hashTable = {};

    while(current){
        hashTable[current.val] = current.val;
        current = current.next;
    }

    current = h2;

    while(current){
        const currentNode = current.val;
        if(currentNode in hashTable) return currentNode;
        current = current.next;
    }

}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

const e = new Node("e");


a.next = b;
b.next = c;
c.next = d;


e.next = c;

console.log(intersectionPoint(a, e));
