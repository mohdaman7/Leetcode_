

// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.





let nums = [1,3,2,1,3,2,2]
var numberOfPairs = function(nums) {
    let i = 1;
    let count = 0;
    let remaning = 0;
    nums.sort((a,b)=>a-b);

    while (i<=nums.length){
        if(nums[i]==nums[i-1]){
            count++
            i+=2
        }else{
            remaning++
            i+=1
        }
    }
    if(count == 0 && remaning == 0){
        count = 0;
        remaning = nums.length;
    }
    return [count,remaning]
};
console.log(numberOfPairs(nums));
