let word = "abcdefd", ch = "d";

var reversePrefix = function(word, ch) {
    let str = '';
    let arr = word.split('');
    let len = arr.indexOf(ch)
    for(let i=len;i>=0;i--){
        str+=word[i]
    }
    for(let j=len+1;j<word.length;j++){
        str+=word[j]
    }
    return str
};

console.log(reversePrefix(word,ch))