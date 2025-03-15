let words = ["leet","code"], x = "e"

var findWordsContaining = function(words, x) {
    let result = [];
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result
};

console.log(findWordsContaining(words,x))