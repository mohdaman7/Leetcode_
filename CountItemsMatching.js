//CountItemsMatching.js



// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].



let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let i=0;i<items.length;i++){
        let type = items[i][0]
        let color = items[i][1]
        let name = items[i][2];
        if(ruleKey == "color" && ruleValue == color) {
            count++
        }else if(ruleKey == "type" && ruleValue == type){
            count++
        }else if (ruleKey == "name" && ruleValue == name){
            count++
        }
        
    }
    return count
};
console.log(countMatches(items, ruleKey, ruleValue));