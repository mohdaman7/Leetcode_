let nums = [10,12,13,14];

var minElement = function(nums) {
    let num;
    let arr=[]
    for(let i=0;i<nums.length;i++){
        let sum=0;
        num = nums[i].toString().split('')
        for(let j=0;j<num.length;j++){
            sum+=parseInt(num[j])
        }
        arr.push(sum)
    }
    return Math.min(...arr)
};

console.log(minElement(nums))