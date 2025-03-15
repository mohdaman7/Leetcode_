

let nums = [0,2,1,5,3,4]
var buildArray = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        let num = nums[nums[i]]
        arr.push(num)
    }
    return arr
};
console.log(buildArray(nums))












