


// Given a string s, calculate its reverse degree.

// The reverse degree is calculated as follows:

// For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
// Sum these products for all characters in the string.
// Return the reverse degree of s.

 

// Example 1:

// Input: s = "abc"

// Output: 148

// Explanation:

// Letter	Index in Reversed Alphabet	Index in String	Product
// 'a'	26	1	26
// 'b'	25	2	50
// 'c'	24	3	72
// The reversed degree is 26 + 50 + 72 = 148.




let s = "abc"
var reverseDegree = function(s) {
    let num = 0;
    let result = 0;
    for(let i=0;i<s.length;i++){
        num = 'z'.charCodeAt() - s.charCodeAt(i) + 1
        result += num*(i+1)
    }
    return result
};
console.log(reverseDegree(s))