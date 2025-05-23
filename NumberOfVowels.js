

// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

 

// Example 1:

// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
// Explanation: 
// - "are" is a vowel string because it starts with 'a' and ends with 'e'.
// - "amy" is not a vowel string because it does not end with a vowel.
// - "u" is a vowel string because it starts with 'u' and ends with 'u'.
// The number of vowel strings in the mentioned range is 2.


let words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4;
var vowelStrings = function(words, left, right) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i=left;i<=right;i++){
        let len = words[i].length
        let start = words[i][0]
        let end = words[i][len-1];
        if(vowels.includes(start)&&vowels.includes(end)){
            count++
        }
    }
    return count
};
console.log(vowelStrings(words, left, right))


