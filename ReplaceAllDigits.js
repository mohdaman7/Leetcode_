let s = "a1c1e1"
var replaceDigits = function(s) {
    let res = ''
    for(let i=0;i<s.length;i++){
        let prev = s[i]
        if(i%2==0){
            res += s[i]
        }else{
            let num = parseInt(s[i])
            let asci = s.charCodeAt(i-1)
            console.log(asci)
            let text = String.fromCharCode(asci+num)
            res += text
        }
    }
    return res
};
console.log(replaceDigits(s))