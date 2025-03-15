
let nums = [1,0,0,0,1,0,0,1], k = 2;
var kLengthApart = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            for (let j = i + 1; j <= i + k; j++) {
                if (nums[j] == 1) return false
            }
        }
    }
    return true
};
 
console.log(kLengthApart(nums,k))