let n=10,m=3

var differenceOfSums = function(n, m) {
    let num1=0;
    let num2=0;
    for(let i=1;i<=n;i++){
        if(i%m==0){
            num2+=i
        }else{
            num1+=i
        }
    }
    return num1-num2
};

console.log(differenceOfSums(n,m))