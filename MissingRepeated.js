let grid = [[1,3],[2,2]]

var findMissingAndRepeatedValues = function(grid) {
    let arr = grid.flat().sort((a,b)=>a-b);
    let result = [];
    let num = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            result.push(arr[i])
        }
    }
    for(let i=1;i<=arr.length;i++){
        if(!arr.includes(i)){
            result.push(i)
        }
    }
    return result
};

console.log(findMissingAndRepeatedValues(grid))
