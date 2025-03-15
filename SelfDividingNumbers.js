
const left = 1, right = 22;
var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i=left;i<=right;i++){
        let flag = true;
        if(i>=10){
            let arr = i.toString().split('')
           for(let j=0;j<arr.length;j++){
               if(i%parseInt(arr[j])!=0){
                  flag=false
               }
           }
           if(flag && i%10!=0){
               result.push(i)
           }
        }else{
            result.push(i)
        }
    }
    return result
    
}
console.log(selfDividingNumbers(left,right));