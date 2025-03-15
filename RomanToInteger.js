
let s = "III"

var romanToInt = function(s) {
    const roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let total = 0;
    for(let i=0;i<s.length;i++){
        const value = roman[s[i]]
        const value2 = roman[s[i+1]]
        if(value2&&value<value2){
            total-=value
        }else{
            total+=value
        }
    }
    return total 
};

console.log(romanToInt(s))