
let nums = [9,12,5,10,14,3,10], pivot = 10;

var pivotArray = function(nums, pivot) {
    let arr1 = [];
    let arr2 = [];
    let equal = [];
    let result;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            arr1.push(nums[i])
        }else if(nums[i]>pivot){
            arr2.push(nums[i])
        }else{
            equal.push(nums[i])
        }
    }
    result = arr1.concat(equal,arr2)
    return result
    
};
console.log(pivotArray(nums,pivot))


