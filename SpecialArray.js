let nums = [4,3,1,6]

var isArraySpecial = function(nums) {
    for(let i=1;i<nums.length;++i){
        if(nums[i-1]%2==nums[i]%2){
            return false
        }
    }
    return true
};

console.log(isArraySpecial(nums))