let numbers = [2,7,11,15], target = 9
var twoSum = function(numbers, target) {
    let start = 0,end = numbers.length;
    let sum = numbers[start] + numbers[end];
    while(sum!=target){
        if(sum<target){
            start++
        }else{
            end--
        }
        sum = numbers[start] + numbers[end]
    }
    return [start+1,end+1]
};
console.log(twoSum(numbers,target))