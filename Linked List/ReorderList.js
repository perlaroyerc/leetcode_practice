
class Node {
    constructor(val){
        this.val = val;
        this.next = next;
    }
}



const reorderList = (head) => {

    const stack = [];

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }


    while(slow){
        stack.push(slow.val);
        slow = slow.next;
    }

    let current = head;

    while(current){
        let temp = current.next;
        if(stack.length > 0){
            const newNode = new ListNode(stack.pop());
            current.next = newNode;
            newNode.next = temp;
            current = temp;
        }
    }

    return head;

};




// var reorderList = function(head) {

//     //get the value of n
//     // let n;

//     // while(head){
//     //     if(head.next === null) n = head;
//     //     head = head.next;
//     // }

//     // const n_node = new ListNode(n);
//     // let prev = head;
//     // let current = head.next;

// //while current.next === null
// //prev.next should point to n
// //n.next should point to curr
// //move curr and pointer foward
// //decrement n

//     // while(current.next){
//     //     prev.next = n_node;
//     //     n_node.next = current;
//     //     prev = curent;
//     //     current = current.next;
//     //     n--;
//     // }

//     // return head;
    
// };


//other strategy use a stack to store 2nd half
//current.next = popped node