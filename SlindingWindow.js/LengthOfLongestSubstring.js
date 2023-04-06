/*
We are given a string S, and we have to return the length of the longest substring with unique characters.

Example 1:
Input: S = "aabcba"
Output: 3
Explanation: There are two longest substring with a length of 3 with no repeating characters, these are "abc" and "cba".
Example 2:
Input: S = "cccc"
Output: 1
Explanation: The only possible substring with no repeating characters is "c", hence the output is 1.

*/

const lengthOfLongestSubstring = (s) => {

    const hashSet = new Set();
    let maxLength = 0;
    let start = 0;
    let end = 0;

    while(end < s.length){

        if(!hashSet.has(s[end])){
            hashSet.add(s[end]);
            end++;
        } else {
            hashSet.delete(s[start]);
            start++;
        }

        maxLength = Math.max(maxLength, hashSet.size);
    }

    return maxLength;

}

console.log(lengthOfLongestSubstring('aabcba'));
console.log(lengthOfLongestSubstring('cccc'));
console.log(lengthOfLongestSubstring('pwwkew'));