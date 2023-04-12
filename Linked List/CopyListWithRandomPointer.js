
class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}



const copyRandomList = (head) => {
    const copiedList = {};
    let current = head;

    while(current){
        const copyNode = new Node(current.val);
        copiedList[current] = copyNode;
        current = current.next;
    }

    current = head;

    while(current){
        const copied = new Node(copiedList[current]);
        copied.next = copiedList[current.next];
        copied.random = copiedList[current.random] ? copiedList[current.random] : null;

        current = current.next;

    }

  
    return copiedList[head];
};