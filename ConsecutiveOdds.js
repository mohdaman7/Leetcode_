


// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.



let arr = [2,6,4,1]
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]%2!=0&&arr[i+1]%2!=0&&arr[i+2]%2!=0){
            return true
        }
    }
    return false
}
console.log(threeConsecutiveOdds(arr));





