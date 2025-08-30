


// An ant is on a boundary. It sometimes goes left and sometimes right.

// You are given an array of non-zero integers nums. The ant starts reading nums from the first element of it to its end. At each step, it moves according to the value of the current element:

// If nums[i] < 0, it moves left by -nums[i] units.
// If nums[i] > 0, it moves right by nums[i] units.
// Return the number of times the ant returns to the boundary.

// Notes:

// There is an infinite space on both sides of the boundary.
// We check whether the ant is on the boundary only after it has moved |nums[i]| units. In other words, if the ant crosses the boundary during its movement, it does not count.
 

// Example 1:

// Input: nums = [2,3,-5]
// Output: 1
// Explanation: After the first step, the ant is 2 steps to the right of the boundary.
// After the second step, the ant is 5 steps to the right of the boundary.
// After the third step, the ant is on the boundary.
// So the answer is 1.



let nums = [2,3,-5]
var returnToBoundaryCount = function(nums) {
    let count = 0 
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i];
        if(sum == 0){
            count++
        }
    }
    return count
};
console.log(returnToBoundaryCount(nums))