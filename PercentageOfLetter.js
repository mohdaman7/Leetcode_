
let s = "foobar", letter = "o"
var percentageLetter = function(s,letter) {
    let count = 0;
    let result;
    for(let i=0;i<s.length;i++){
        if(s[i].includes(letter)){
            count++
        }
    }
    result = count/s.length * 100
    return Math.round(result)
    
};
console.log(percentageLetter(s,letter))