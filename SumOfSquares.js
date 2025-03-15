
let nums = [2,7,1,19,18,3];
var sumOfSquares = function(nums) {
    let n = nums.length;
    let sum = 0;
    for(let i=0;i<n;i++){
        let j=i+1
        if(n%j==0){
            sum += nums[i]*nums[i]
        }
    }
    return sum
};
console.log(sumOfSquares(nums))
