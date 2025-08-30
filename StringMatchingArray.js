


// Given an array of string words, return all strings in words that are a substring of another word. You can return the answer in any order.

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.




let words = ["mass","as","hero","superhero"]
var stringMatching = function(words) {
    const arr = words.join(' ');
    console.log(arr)
    return words.filter(word => arr.split(word).length > 2)
};
console.log(stringMatching(words))