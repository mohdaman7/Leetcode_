//LargestNumberTwice

let nums = [3,6,1,0];
var dominantIndex = function(nums) {
    let sort = [...nums]
    sort = sort.sort((a,b)=>b-a);
    let max = sort[0];
    if(sort[1]*2>max){
        return -1
    }
    for(let i=0;i<nums.length;i++){
        if(max===nums[i]){
            return i
        }
    }
};

console.log(dominantIndex(nums))


