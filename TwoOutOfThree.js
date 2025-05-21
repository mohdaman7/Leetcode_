
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.




let nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
var twoOutOfThree = function(nums1, nums2, nums3) {
    let hashSet = new Set()
    for(let i=0;i<nums1.length;i++){
        let num = nums1[i];
        if(nums2.includes(num) || nums3.includes(num)){
            hashSet.add(num)
        }
    }
    for(let i=0;i<nums2.length;i++){
        let num = nums2[i];
        if(nums1.includes(num) || nums3.includes(num)){
            hashSet.add(num)
        }
    }
    return [...hashSet]
};
console.log(twoOutOfThree(nums1, nums2, nums3))