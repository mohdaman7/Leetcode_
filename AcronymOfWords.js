
let words = ["alice","bob","charlie"], s = "abc"

var isAcronym = function(words, s) {
    for(let i=0;i<words.length;i++){
        if(words.length!=s.length) return false;
        if (!words[i].startsWith(s[i])){
            return false
        }
    }
    return true
};

console.log(isAcronym(words,s))