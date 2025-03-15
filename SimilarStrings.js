
let words = ["aba","aabb","abcd","bac","aabc"];
var similarPairs = function(words) {
    words = words.map(word=>[...new Set(word)].sort().join(""))
    let count = 0;
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
            if(words[i]==words[j]){
                count++
            }
        }
    }
    return count
};
console.log(similarPairs(words))
