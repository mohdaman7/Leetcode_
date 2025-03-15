let nums = [1,2,3,4,10]

var canAliceWin = function(nums) {
    let s=0,d=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=10){
            d+=nums[i]
        }else{
            s+=nums[i]
        }
    }
    if(s==d){
        return false
    }else{
        return true
    }
};

console.log(canAliceWin(nums))