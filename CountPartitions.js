
let  nums = [10,10,3,7,6];

var countPartitions = function(nums) {
    let count = 0;
    let res
    for(let i=0;i<nums.length-1;i++){
        arr1 = nums.slice(0,i+1)
        arr2 = nums.slice(i+1,nums.length)
        sum1 = arr1.reduce((acc,curr)=>acc+curr,0);
        sum2 = arr2.reduce((acc,curr)=>acc+curr,0);
        res = Math.abs(sum1-sum2);
        if(res%2==0){
            count++
        }
        
    }
    return count
};

console.log(countPartitions(nums))