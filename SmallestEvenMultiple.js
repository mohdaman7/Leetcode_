//SmallestEvenMultiple

let n=5;

var smallestEvenMultiple = function(n) {
    for(let i=1;i<=150;i++){
        if(i%2==0&&i%n==0){
            return i
        }
    }
};

console.log(smallestEvenMultiple(n))