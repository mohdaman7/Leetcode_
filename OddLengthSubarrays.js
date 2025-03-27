
// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58



let arr = [1,4,2,5,3]
var sumOddLengthSubarrays = function(arr) {
    let len = arr.length;
    let sum = 0;
    if(arr.length<3){
        return sum = arr.reduce((acc,curr)=>acc+curr,0)
    }
    for(let i=1;i<=arr.length;i++){
        if(i%2!=0){
            let k=i
            for(let j=0;j<arr.length;j++){
                let add = arr.slice(j,j+k)
                if(add.length==k){
                    let a =add.reduce((acc,curr)=>acc+curr,0)
                    sum+=a
                }
            }
        }
    }
    return sum
    
};
console.log(sumOddLengthSubarrays(arr))