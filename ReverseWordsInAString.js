let s = "Let's take LeetCode contest";

var reverseWords = function(s) {
    let arr = s.split(' ')
    let str = ''
    for(let i=0;i<arr.length;i++){
      str+=arr[i].split('').reverse().join('')
      str+=' '
    }
    return str.trim()
};

console.log(reverseWords(s))
