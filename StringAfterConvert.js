let s = "leetcode", k = 2
var getLucky = function(s, k) {
    let str = ''
    let num , sum;
    for(let i=0;i<s.length;i++){
        str += (s.charCodeAt(i)-96).toString();
    }
    for(let i=0;i<k;i++){
        sum = 0;
        for(let j=0;j<str.length;j++){
            num = str[j];
            sum += parseInt(num)
        }
        str = sum.toString()
    }
    return sum
};
console.log(getLucky(s,k))