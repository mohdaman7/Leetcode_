let nums = [1,2,3,2];

var sumOfUnique = function(nums) {
    return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num)).reduce((a,b)=>a+b,0)
};

console.log(sumOfUnique(nums))