
let nums = [13,25,83,77];

var separateDigits = function(nums) {
    let arr = nums.toString().split('')
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            result.push(parseInt(arr[i]))
        }
    }
    return result
};

console.log(separateDigits(nums))


