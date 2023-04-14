/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/

//Time complexity: O(n)
//Space complexity: O(1)

const backspaceCompare = (s, t) => {
    let i = s.length -1;
    let j = t.length -1;
    let sSkip = 0;
    let tSkip = 0;
  
    while(i >= 0 || j >= 0) {
   
        if(s[i] === '#') {
          sSkip++;
          i--;
        } 
        else if(sSkip > 0 && i >= 0) {
          i--;
          sSkip--;
        }
  
        else if(t[j] === '#') {
          tSkip++;
          j--;
        }
        else if(tSkip > 0 && j >= 0) {
          j--;
          tSkip--;
        }
        
        else if(s[i] !== t[j]) return false
  
        else {
          i--;
          j--;
          
        }
    }  
  
    return true;
  
  };