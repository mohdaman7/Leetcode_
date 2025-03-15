let nums = [7,52,2,4]
var findTheArrayConcVal = function(nums) {
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(nums.length>1){
        arr.push(parseInt((nums[0].toString()+nums[nums.length-1].toString())));
        nums.shift()
        nums.pop()
        }else if(nums.length<=1){
            arr.push(nums[i].toString())
        }
    }
    return arr.reduce((curr,acc)=>acc+curr)
};
console.log(findTheArrayConcVal(nums))