
let nums = [1,2,3,3]
var repeatedNTimes = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]==nums[j]&&i!=j){
                return nums[i]
            }
        }
    }
};

console.log(repeatedNTimes(nums))
