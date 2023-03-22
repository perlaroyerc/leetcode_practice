/*
We are given an array of N positive integers. Each of the numbers represents a packet of chocolate, 
where the number is the number of chocolates in the packet.

There are M students in a classroom, and we have to distribute these packets to those students such that:

Every student must get a packet of chocolate.
The difference between the maximum chocolate packet and the minimum chocolate packet should be minimum.
We have to find that difference.

Example 1:
Input: [5 7 2 8 4 3], M = 3
Output: 2
Explanation: 6 packets are to be distributed in 3 students. 
If we give packets with 2, 3, and 4 chocolates to these 3 students, then the difference will be minimum, 4 - 2 = 2.

Example 2:
Input: [2 14 11 12 17], M = 4
Output: 6
Explanation: Packets with 11, 12, 14 and 17 chocolates are distributed to 4 students and the minimum difference is 17 - 11 = 6.

*/


const chocolateDistributor = (packet, m) => {

    if(!packet.length || m < 1) return 0;

    let len = packet.length;

    packet = packet.sort((a, b) => a - b);
    let min = Infinity;

    for(let i = 0; i < len - m; i++){
        let currDiff = packet[i + m - 1] - packet[i];
        min = Math.min(min, currDiff);
    }

    return min;

};

// console.log(chocolateDistributor([5, 7, 2, 8, 4, 3], 3));
console.log(chocolateDistributor([2, 14, 11, 12, 17], 4));