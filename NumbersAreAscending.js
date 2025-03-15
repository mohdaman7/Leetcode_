//NumbersAreAscending

let s = "hello world 5 x 5";

var areNumbersAscending = function(s) {
    let split = s.split(' ')
    let arr = []
    for(let i=0;i<split.length;i++){
        if(Number(split[i])){
            arr.push(parseInt(split[i]))
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=arr[i+1]){
            return false
        }
    }
    return true
    
};
console.log(areNumbersAscending(s))