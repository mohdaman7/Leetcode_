
let x = 121

var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    const str = x.toString()
    const rev = str.split('').reverse().join('')
    return str === rev 
};

console.log(isPalindrome(x))