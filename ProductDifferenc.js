

// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

 

// Example 1:

// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.


let nums = [5,6,2,7,4];
var maxProductDifference = function(nums) {
    let sum = 0;
    let arr = nums.sort((a,b)=>a-b);
    sum += arr[nums.length-1] * arr[nums.length-2] - arr[1] * arr[0];
    return sum
};
console.log(maxProductDifference(nums))


