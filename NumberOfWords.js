let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = function(sentences) {
    let words
    let len = 0
    for(let i=0;i<sentences.length;i++){
        words = sentences[i].split(' ').length
        if(words>len){
            len = words
        }
    }
    return len
};

console.log(mostWordsFound(sentences))