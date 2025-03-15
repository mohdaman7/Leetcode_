
let nums = [2,2,1,1,1,2,2];
var majorityElement = function(nums) {
    let len = nums.length/2;
    for(let i=0;i<nums.length;i++){
        let count = 1;
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j]&&i!=j){
                count++;
            }
        }
        if(count>=len){
            return nums[i]
        }
    }
};
console.log(majorityElement(nums))