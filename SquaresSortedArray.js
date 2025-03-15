let nums = [-4,-1,0,3,10]

var sortedSquares = function(nums) {
    let arr = [];
    let num;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            num = Math.abs(nums[i])
            arr.push(num*num)
        }else{
            arr.push(nums[i]*nums[i])
        }
    }
    return arr.sort((a,b)=>a-b)
};

console.log(sortedSquares(nums))