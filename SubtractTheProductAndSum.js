
let n = 234

var subtractProductAndSum = function(n) {
    n = n.toString();
    let sum = 0;
    let product = 1;

    for(let i=0;i<n.length;i++){
        sum += parseInt(n[i])
        product *= parseInt(n[i])
    }

    return product - sum
};

console.log(subtractProductAndSum(n))