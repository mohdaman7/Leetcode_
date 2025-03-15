let nums = [1,15,6,3]

var differenceOfSum = function(nums) {
    let sum1 = 0
    let sum2 = 0;
    let arr=[]
    let narr = []
    for(let i=0;i<nums.length;i++){
        sum1+=nums[i]
        if(nums[i]>=10){
            arr.push(nums[i].toString().split(''))
        }else{
            sum2+=nums[i]
        }
    }
    narr = arr.flat()
    for(let j=0;j<narr.length;j++){
        sum2+=parseInt(narr[j])
    }
    return sum1-sum2
};

console.log(differenceOfSum(nums))