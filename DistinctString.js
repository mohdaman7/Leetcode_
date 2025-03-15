let arr = ["d","b","c","b","c","a"], k = 2;

var kthDistinct = function(arr, k) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let count = 0
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]&&i!=j){
                count++;
            } 
        }
        if(count==0){
            result.push(arr[i])
        }
    }
    if(result[k-1]==undefined){
        return ""
    }else{
          return result[k-1]
    }
};

console.log(kthDistinct(arr,k))