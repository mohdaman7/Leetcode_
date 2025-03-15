//IntersectionOfMultiple.js


let nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];
var intersection = function(nums) {
    let arr = []
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[i].length;j++){
            let count = 0;
            for(let k=0;k<nums.length;k++){
                if(nums[k].includes(nums[i][j])){
                    count++
                }
            }
            if(count == nums.length && !arr.includes(nums[i][j])){
                arr.push(nums[i][j])
            }
        }
    }
    return arr
};
console.log(intersection(nums));