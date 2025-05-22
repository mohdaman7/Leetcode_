


// You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.

// Return the number of integer points on the line that are covered with any part of a car.

 

// Example 1:

// Input: nums = [[3,6],[1,5],[4,7]]
// Output: 7
// Explanation: All the points from 1 to 7 intersect at least one car, therefore the answer would be 7.



let nums = [[3,6],[1,5],[4,7]];
var numberOfPoints = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        let start = nums[i][0]
        let end = nums[i][1]
        for(let j=end;j>=start;j--){
            arr.push(j)
        }
    }
    let set = new Set(arr)
    let res = [...set]
    return res.length
};
console.log(numberOfPoints(nums))