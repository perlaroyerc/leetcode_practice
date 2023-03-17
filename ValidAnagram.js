/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
    const cache = {};

    if(s.length !== t.length) return false;

    for(let char of s){
        if(!cache[char]){
            cache[char] = 1;
        } else {
            cache[char]++;
        }
    }

    for(let char of t){
        if(cache[char]) cache[char]--;
        else return false;
    }


    for(const character in cache){
        if(cache[character] !== 0) return false;
    }

    return true;

    
};