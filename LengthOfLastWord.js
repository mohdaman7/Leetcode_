
let s = "   fly me   to   the moon  "

var lengthOfLastWord = function(s) {
    let str = s.trim().split(' ')
    let len = str.length;
    return str[len-1].length
};

console.log(lengthOfLastWord(s))