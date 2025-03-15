let num = "1234";

var isBalanced = function(num) {
    let sum1 = 0;
    let sum2 = 0;
    for(i=0;i<num.length;i++){
        if(i%2==0){
            sum1+=parseInt(num[i])
        }else{
            sum2+=parseInt(num[i])
        }
    }
    if(sum1==sum2){
        return true
    }else {
        return false
    }
}

console.log(isBalanced(num))