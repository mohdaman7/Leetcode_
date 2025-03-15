
let nums = [3,1,2,4]

var sortArrayByParity = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!=0){
            result.push(nums[i])
        }else{
            result.unshift(nums[i])
        }
    }
    return result
};

console.log(sortArrayByParity(nums))