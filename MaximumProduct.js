let  nums = [3,4,5,2];
var maxProduct = function(nums) {
    let arr = nums.sort((a,b)=>a-b);
    let len = arr.length-1;
    let result = (arr[len-1]-1) * (arr[len]-1)
    return result
};

console.log(maxProduct(nums))