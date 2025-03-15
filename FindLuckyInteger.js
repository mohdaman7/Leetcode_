
let arr = [1,2,2,3,3,3];
var findLucky = function(arr) {
    let max = [];
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;i++){
            if(arr[i]==arr[j]){
                count++
            }
        }
        if(arr[i] == count){
            max.push(arr[i])
        }
    }
    if(max.length!=0){
        return Math.max(...max)
    }else{
        return -1
    }
};
console.log(findLucky(arr))