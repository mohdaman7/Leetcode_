
let nums = [10,21,31];

var sumOfEncryptedInt = function(nums) {
    let sum = 0;
    let max;
    let len;
    let num;
    for(let i=0;i<nums.length;i++){
        max = Math.max(...nums[i].toString().split('').join(''))
        len = nums[i].toString().split('').length;
        num = max.toString().repeat(len);
        sum += parseInt(num)
    }
    return sum
};

console.log(sumOfEncryptedInt(nums))