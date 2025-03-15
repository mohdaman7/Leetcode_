//GreatestCommonDivisor

let nums = [2,5,6,9,10]
var findGCD = function(nums) {
    let small = Math.min(...nums);
    let max = Math.max(...nums)
    let arr = [];
    for(let i=1;i<=small;i++){
        if(small%i==0&&max%i==0){
            arr.push(i)
        }
    }
    return Math.max(...arr)
    
};
console.log(findGCD(nums))