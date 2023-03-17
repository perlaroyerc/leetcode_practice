/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase 
letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

//Space complexity O(n)
//Time complexity O(1)

const isPalindrome = (s) => {

    s = s.replace(/[A-Za-z0-9]/g, '').toLowerCase();
    let i = 0;
    let j = s.length -1;

    while(i <= j){
        console.log(s[i], s[j])
        if(s[i] !== s[j]) return false; 
        
        i++;
        j--;

    }

    return true;

};


console.log(isPalindrome('rat')); //false
// console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
// console.log(isPalindrome('race a car')); //false