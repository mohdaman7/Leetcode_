

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r





let word1 = "abc", word2 = "pqr";
var mergeAlternately = function(word1, word2) {
    let len = word1.length + word2.length;
    let res = "";
    let one = 0,two = 0;
    for(let i=0;i<len;i++){
        if(i%2==0){
            if(one<word1.length){
                res+=word1[one++]
            }else{
                res+=word2[two++]
            }
        }else{
            if(two<word2.length){
                res+=word2[two++]
            }else{
                res+=word1[one++]
            }
        }
        
    }
    return res
};
console.log(mergeAlternately(word1,word2));

