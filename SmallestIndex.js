
let nums = [1,2,3,4,5,6,7,8,9,0];

var smallestEqual = function(nums) {
    let result = []
    for(let i=0;i<nums.length;i++){
        if(i%10==nums[i]){
            result.push(i)
        }
    }
    if(result.length == 0){
        return -1
    }
    return Math.min(...result)
};

console.log(smallestEqual(nums))