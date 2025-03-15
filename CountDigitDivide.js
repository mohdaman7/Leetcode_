let num = 121

var countDigits = function(num) {
    let arr = num.toString().split('');
    let count = 0;
    for(let i=0;i<arr.length;i++){
        let n = parseInt(arr[i])
        if(num%n==0){
            count++
        }
    }
    return count
};

console.log(countDigits(num))