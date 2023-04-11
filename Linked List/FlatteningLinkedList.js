/*
Given a linked list where every node represents a linked list and contains two pointers of its type: 

Pointer to next node in the main list (we call it ‘right’ pointer in the code below) 
Pointer to a linked list where this node is headed (we call it the ‘down’ pointer in the code below). 
Note: All linked lists are sorted and the resultant linked list should also be sorted

Input:    5 -> 10 -> 19 -> 28
               |        |         |        |
              V       V       V       V
              7      20      22     35
               |                 |        |
              V               V       V
              8               50     40
              |                          |
             V                        V
            30                       45

Output: 5->7->8->10->19->20->22->28->30->35->40->45->50

*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.bottom = null;
    }
}


const mergeLists = (a, b) => {

    let temp = new Node(0);
    let res = temp;

    while(a && b){
        if(a.val < b.val){
            temp.bottom = a;
            temp = temp.bottom;
            a = a.bottom;

        } else if(b.val < a.val){
            temp.bottom = b;
            temp = temp.bottom;
            b = b.bottom
        }
    }

    if(a !== null) temp.bottom = a;
    else temp.bottom = b;

    return res.bottom;
}

const flatten = (head) => {

    if(!head || !head.next) return head;

    head.next = flatten(head.next);
    
    head = mergeLists(head, head.next);

    return head;

}

const a = new Node(5);
const b = new Node(10);
const c = new Node(19);
const d = new Node(28);

const f = new Node(7);
const g = new Node(8);
const h = new Node(30);
const i = new Node(20);

a.next = b;
b.next = c;
c.next = d;

a.bottom = f;
f.bottom = g;
g.bottom = h;
c.bottom = i;

// console.log(flatten(a));

