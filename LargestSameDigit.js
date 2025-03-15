
let num = "6777133339";
var largestGoodInteger = function(num) {
    let arr = []
    let result
    for(let i=0;i<num.length;i++){
        if(num[i]==num[i+1]&&num[i+1]==num[i+2]){
            arr.push(parseInt(num[i]))
        }
    }
    if(arr.length == 0){
        return ''
    }
    result = Math.max(...arr)
    return result.toString().repeat(3)
    
};

console.log(largestGoodInteger(num))