
let nums = [1,2,2,1], k = 1;
var countKDifference = function(nums, k) {
    let count = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]-nums[j]==k||nums[j]-nums[i]==k){
                count++
            }
        }
    }
    return count
};

console.log(countKDifference(nums,k))