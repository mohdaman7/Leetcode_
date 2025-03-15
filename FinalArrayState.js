

let nums = [2,1,3,5,6], k = 5, multiplier = 2;
var getFinalState = function(nums, k, multiplier) {
    for(let i=1;i<=k;i++){
        let min = Math.min(...nums)
        let ind = nums.indexOf(min)
        nums[ind] = min*multiplier
    }
    return nums
};
console.log(getFinalState(nums, k, multiplier))

