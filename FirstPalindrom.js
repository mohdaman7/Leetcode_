
let words = ["abc","car","ada","racecar","cool"];

var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        let str = words[i].split('').reverse().join('');
        if(words[i]==str){
            return words[i]
        }
    }
    return ''
};

console.log(firstPalindrome(words))

