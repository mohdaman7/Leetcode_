
let nums = [5,3,6,1,12];
let original = 3;

var findFinalValue = function(nums, original) {
    for(let i=0;i<nums.length;i++){
        if(original===nums[i]){
            original = original * 2
            i=-1
        }
    }
    return original
};

console.log(findFinalValue(nums,original))