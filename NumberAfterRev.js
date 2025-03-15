
let num = 1800;

var isSameAfterReversals = function(num) {
    let rev=num.toString().split('').reverse().join('')
    let ans=parseInt(rev).toString().split('').reverse().join('')
    return ans==num
};


console.log(isSameAfterReversals(num))