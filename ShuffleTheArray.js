
let nums = [2,5,1,3,4,7], n = 3
var shuffle = function(nums, n) {
    let res = []
    let j = 0;
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            res.push(nums[j])
            j++
        }else{
            res.push(nums[n])
            n++
        }
    }
    return res
};
console.log(shuffle(nums,n))
 I