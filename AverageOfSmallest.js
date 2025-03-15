let nums = [7,8,3,4,15,13,4,1];
var minimumAverage = function(nums) {
    let sort = nums.sort((a,b)=>a-b);
    let avg = [];
    let len = nums.length/2
    for(let i=0;i<len;i++){
        let sum = sort[0]+sort[sort.length-1]
        avg.push(sum/2);
        sort.shift()
        sort.pop()
    }
    return Math.min(...avg)
};
console.log(minimumAverage(nums))