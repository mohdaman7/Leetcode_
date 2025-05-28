

// Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

// The concatenation of num1 and num2 is a permutation of num.
// In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
// num1 and num2 can contain leading zeros.
// Return the minimum possible sum of num1 and num2.

// Notes:

// It is guaranteed that num does not contain any leading zeros.
// The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.
 

// Example 1:

// Input: num = 4325
// Output: 59
// Explanation: We can split 4325 so that num1 is 24 and num2 is 35, giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.



let num = 4325;
var splitNum = function(num) {
    let arr = num.toString().split('').map((a)=>parseInt(a)).sort((a,b)=>a-b)
    let n1 = '' , n2 = ''
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            n1 += arr[i] 
        }else{
            n2 += arr[i]
        }
    }
    return parseInt(n1) + parseInt(n2)
};
console.log(splitNum(num))