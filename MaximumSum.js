let nums = [1,2,3,4,5], k = 3

var maximizeSum = function(nums, k) {
    let num = Math.max(...nums)
    let sum = 0;
    for(let i=1;i<=k;i++){
        sum += num;
        num++
    }
    return sum
};
console.log(maximizeSum(nums,k))