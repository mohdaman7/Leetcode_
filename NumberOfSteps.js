let num = 14;
var numberOfSteps = function(num) {
    let count = 0;
    for(let i=0;i<=10;i++){
        if(num==0){
            break
        }
        if(num%2==0){
            num = num/2
            count ++
        }else{
            num = num -1
            count++
        }
    }
    return count
};
console.log(numberOfSteps(num))