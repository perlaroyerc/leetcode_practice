/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. 
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: S = ABBCAB, K = 2
Output: 5
Explanation: The longest substring after at most 2 replacements is BBBBB from BBCAB where we replaced 'C' and 'A' with B.

Example 2:
Input: S = ABCD, K = 0
Output: 1
Explanation: Since K is 0, we cannot have any replacement, so the longest substring is going to be any substring containg only one letter. 
In this case it can be just 'A' or just 'B' or just 'C' or just 'D'.

*/

const characterReplacement = (s, k) => {

 const hashMap = {};
 let start = 0;
 let maxLength = 0;
 let mostFrequentChar = 0;

 for(let end = 0; end < s.length; end++){

  const currentChar = s[end];
  
  if(!hashMap[currentChar]) hashMap[currentChar] = 1;
  else if(hashMap[currentChar]) hashMap[currentChar]++;

  mostFrequentChar = Math.max(mostFrequentChar, hashMap[currentChar]);

  //if replacement times gets max out decrement from hashmap, increment start
  if(end - start + 1 - mostFrequentChar > k){
      const removedChar = s[start];
      hashMap[removedChar]--;
      start++;
  }

  maxLength = Math.max(maxLength, end - start + 1);

 }
  
  return maxLength;


}

// console.log(characterReplacement('ABBCAB', 2));
// console.log(characterReplacement('ABCD', 0));