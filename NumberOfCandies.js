let candies = [2,3,5,1,3], extraCandies = 3

var kidsWithCandies = function(candies, extraCandies) {
    let arr = [];
    let max = Math.max(...candies)
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies >= max){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }
    return arr
};

console.log(kidsWithCandies(candies,extraCandies))