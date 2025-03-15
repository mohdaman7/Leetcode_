//TruncateSentence

let s = "Hello how are you Contestant", k = 4;
var truncateSentence = function(s, k) {
    let arr = s.split(' ')
    let str = '';
    for(let i=0;i<k;i++){
        str += arr[i] + ' '
        
    }
    return str.trim()
};

console.log(truncateSentence(s,k))

