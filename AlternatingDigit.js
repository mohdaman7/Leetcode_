let n = 521;
var alternateDigitSum = function(n) {
    let arr = n.toString().split('');
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(i%2!=0){
            sum += parseInt(-arr[i])
        }else{
            sum += parseInt(arr[i])
        }
    }
    return sum
};

console.log(alternateDigitSum(n))

